import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { LogIn, UserPlus, X } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import toast from "react-hot-toast";
import axiosInstance from "@/Api/AxiosInstance";
import { LogInContext } from "../../App";

function Login() {
  const { login } = useContext(LogInContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginUser = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post("/user/login", formData);
      if (res.data.success) {
        setFormData({
          email: "",
          password: "",
        });
        toast.success(res.data.data.user.fullName);
        login(res.data.data.user);
        navigate("/dashboard", { replace: true });
      } else {
        toast.error("Please contact admin!");
      }
    } catch (error) {
      console.error("Error in login user", error);
      if (error.res) {
        toast.error(error.res.data.message || "An error occurred.");
      } else {
        toast.error("Network Error. Please try again later.");
      }
    }
  };

  return (
    <div className="flex flex-col p-4 sm:p-6 lg:p-8 sm:items-center sm:justify-center">
      <div className="bg-white pt-3 pb-6 rounded-lg w-full max-w-md shadow-md">
        <div className="login-form p-2 pb-4 flex flex-col items-center space-y-2">
          <span className="font-inter p-2 text-center">
            👉 If don't have an account please
            <span className="text-blue-500"> Sign-Up</span> first!! 👈
          </span>
          <Link to="/sign-up">
            <Button size="default">
              <UserPlus /> Sign Up
            </Button>
          </Link>
        </div>

        <hr className="pb-4" />

        <form onSubmit={handleLoginUser} className="flex flex-col items-center">
          <span className="font-inter p-2 text-center">
            👉 If already have an account then
            <span className="text-blue-500"> Login</span> please!! 👈
          </span>
          <div className="mb-4 pt-3">
            <Label htmlFor="user-email" className="sr-only">
              Enter Email Id:
            </Label>
            <Input
              type="email"
              name="email"
              id="user-email"
              value={formData.email}
              required
              placeholder="Enter Email"
              onChange={handleChange}
              className="w-[250px]"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="user-password" className="sr-only">
              Enter Password:
            </Label>
            <Input
              type="password"
              name="password"
              id="user-password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter Password"
              className="w-[250px]"
            />
          </div>
          <div className="login-form-btn flex items-center justify-center space-x-3">
            <Button type="submit">
              <LogIn />
              <span>Login</span>
            </Button>
            <Button
              type="reset"
              onClick={() => {
                setFormData({
                  email: "",
                  password: "",
                });
              }}
            >
              <X />
              <span>Reset</span>
            </Button>
          </div>

          <div className="forgot-password flex items-start pt-4">
            <Link
              to="forgot-password"
              className="text-red-700 underline text-left"
            >
              Forgot Password
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
