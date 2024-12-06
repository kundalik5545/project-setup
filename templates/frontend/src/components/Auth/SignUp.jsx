import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LogIn, Send, X, Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axiosInstance from "@/Api/AxiosInstance";

function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post("/user/signUp", formData);
      if (res.status === 201) {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
        });
        toast.success(`${res.data.message}`);
      } else {
        toast.error("Please contact admin!");
      }
    } catch (error) {
      if (error.res.status === 400) {
        toast.error(`${error.res.data.message}`);
      } else if (error.res.status === 409) {
        toast.error(`${error.res.data.message}`);
      } else if (error.res.status === 500) {
        toast.error(`${error.res.data.message}`);
      } else {
        toast.error(
          "An error occurred during registration. Please try after some time."
        );
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen p-4 sm:p-6 lg:p-8 sm:items-center sm:justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="sign-up-form flex justify-end p-4">
          <Link to="/login">
            <Button size="default">
              <LogIn /> Login
            </Button>
          </Link>
        </div>
        <div className="create-acc text-center px-2 py-4">
          <h2 className="font-mono text-2xl mb-4 font-bold text-black">
            Create an account
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <Input
              type="text"
              required
              placeholder="Enter Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />

            <Input
              type="email"
              required
              placeholder="Enter Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              type="tel"
              required
              name="phone"
              placeholder="Enter Phone"
              minLength="10"
              maxLength="10"
              value={formData.phone}
              onChange={handleChange}
            />
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                required
                placeholder="Enter Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye /> : <EyeOff />}
              </span>
            </div>
            <div className="relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                required
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <Eye /> : <EyeOff />}
              </span>
            </div>
            <div className="sign-up-btn space-x-3 flex items-center justify-center pt-4">
              <Button type="submit" size="default">
                <Send />
                Create Account
              </Button>
              <Button
                type="reset"
                size="default"
                onClick={() => {
                  setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    password: "",
                    confirmPassword: "",
                  });
                }}
              >
                <X />
                Reset
              </Button>
            </div>
          </form>
        </div>
        <div className="sign-up-terms font-inter text-center p-4 text-sm text-gray-600">
          By clicking continue, you agree to our Terms of Service and Privacy
          Policy.
        </div>
      </div>
    </div>
  );
}

export default SignUp;
