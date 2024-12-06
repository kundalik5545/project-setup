import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../model/User.model.js";

export const verifyJWT = asyncHandler(async (req, res, next) => {
  // Log statements for debugging
  console.log("this is before try catch block");
  console.log("accessToken value from cookies:", req.cookies?.accessToken);
  console.log(
    "Authorization accessToken value from header:",
    req.header("Authorization")?.replace("Bearer ", "")
  );

  try {
    // Retrieve token from Authorization header or cookies
    const token =
      req.header("Authorization")?.replace("Bearer ", "") ||
      req.cookies?.accessToken;

    if (!token) {
      return res
        .status(401)
        .json(new ApiResponse(401, null, "Unauthorized Request."));
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      return res
        .status(401)
        .json(new ApiResponse(401, null, "Invalid Access Token"));
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Error in verifyJWT middleware:", error);

    return res
      .status(401)
      .json(
        new ApiResponse(401, null, error?.message || "Invalid access token")
      );
  }
});
