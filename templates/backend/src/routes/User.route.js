import { Router } from "express";
import { verifyJWT } from "../middlewares/VerifyJWT.middleware.js";
import {
  registerNewUser,
  loginUser,
  logoutUser,
  updatePassword,
  getUserDetails,
  refreshAccessToken,
} from "../controllers/User.controller.js";

const router = Router();

// New routes for my controllers
router.route("/signUp").post(registerNewUser);
router.route("/login").post(loginUser);

//secured routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/userDetails").post(getUserDetails);

router.route("/refresh-token").get(refreshAccessToken);

export default router;
