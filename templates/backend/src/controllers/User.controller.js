import { User } from "../model/User.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";

//Generate access and refresh token
const generateTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating referesh and access token"
    );
  }
};
//Register User
const registerNewUser = asyncHandler(async (req, res) => {
  const { fullName, email, phone, password } = req.body;

  // 2. Check all required fields are provided in the correct format
  if (!fullName || !email || !phone || !password) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "All fields are required"));
  }

  // 3. Check if the user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res
      .status(409)
      .json(
        new ApiResponse(409, null, "User already registered. Please log in.")
      );
  }

  // 5. Create a new user with the hashed password
  const user = await User.create({
    fullName,
    email,
    phone,
    password,
  });

  // 6. Fetch the created user if created successfully
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  //If created user fails
  if (!createdUser) {
    return res
      .status(500)
      .json(
        new ApiResponse(
          500,
          null,
          "Something went wrong while registering the user"
        )
      );
  }
  // 7. Return response for created user
  return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        createdUser,
        "User created successfully! Please log in now."
      )
    );
});

//TO login user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // 1. Check if all fields are entered
  if (!email || !password) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "All fields are required"));
  }

  // 2. Check if user exists
  const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(404)
      .json(new ApiResponse(404, null, "User not found. Please register!"));
  }

  // 3. Validate password
  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    return res.status(401).json(new ApiResponse(401, null, "Invald Password!"));
  }

  // 4. Generate a JWT token
  const { accessToken, refreshToken } = await generateTokens(
    user._id
  );

  //5.
  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options1 = {
    httpOnly: true,
    secure: true,
  };

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Only secure in production
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // Set expiration for 30 days
    sameSite: "lax", // Adjust if needed based on your setup
    path: "/", // Make sure the path is root
  };

  //6. Return access and refresh token to user
  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User logged In Successfully"
      )
    );
});

//Log out user ==> http://localhost:8000/api/v1/user/mylogOut
const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1, // this removes the field from document
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
    sameSite: "Lax",
    path: "/",
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged Out"));
});

//To generate refresh token
const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "unauthorized request");
  }

  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken?._id);

    if (!user) {
      throw new ApiError(401, "Invalid refresh token");
    }

    if (incomingRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, "Refresh token is expired or used");
    }

    const options = {
      httpOnly: true,
      secure: true,
    };

    const { accessToken, newRefreshToken } =
      await generateAccessAndRefereshTokens(user._id);

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newRefreshToken },
          "Access token refreshed"
        )
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid refresh token");
  }
});

//TO change the password
const updatePassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const user = await User.findById(req.user?._id);
  const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

  if (!isPasswordCorrect) {
    throw new ApiError(400, "Invalid old password");
  }

  user.password = newPassword;
  await user.save({ validateBeforeSave: false });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password changed successfully"));
});

//To get current users details
const getUserDetails = asyncHandler(async (req, res) => {
  try {
    const _id = req.body;
    const userBasicDetails = await User.findById(_id).select(
      "-password -refreshToken"
    );

    return res
      .status(200)
      .json(
        new ApiResponse(200, userBasicDetails, "User fetched successfully")
      );
  } catch (error) {
    throw new ApiError(401, error);
  }
});

export {
  registerNewUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  updatePassword,
  getUserDetails,
};
