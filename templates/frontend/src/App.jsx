import React, { useState, useEffect, createContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";

// Components and Pages
import NavbarMain from "./components/Navbar/TopNav/NavbarMain";
import Footer from "./components/Navbar/Footer/Footer";

// Utilities
import axiosInstance from "./Api/AxiosInstance";
import { v4 as uuidv4 } from "uuid";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import { PublicRoutes, PrivateRoutes } from "./Routes/RouteConfig.js";

// Create Context
export const LogInContext = createContext();

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const validateSession = async () => {
      try {
        const res = await axiosInstance.post("/session/validate");
        if (res.status == 200) {
          setUser(res.data.data);
          setIsLoggedIn(true);
          const token = uuidv4();
          sessionStorage.setItem("UUID", token);
        } else {
          setIsLoggedIn(false);
          setUser(null);
          sessionStorage.removeItem("UUID");
          navigate("/");
        }
      } catch (error) {
        console.error("Session validation failed:", error);
        setIsLoggedIn(false);
        navigate("/");
      }
    };

    validateSession();
  }, []);

  const login = (userData) => {
    if (userData) {
      const token = uuidv4();
      setUser(userData);
      sessionStorage.setItem("UUID", token);
      setIsLoggedIn(true);
    } else {
      logout();
    }
  };

  const logout = async () => {
    try {
      const res = await axiosInstance.post("/user/logout");
      if (res.data) {
        setIsLoggedIn(false);
        setUser(null);
        sessionStorage.removeItem("UUID");
        navigate("/");
      } else {
        console.error("Please contact admin. You are not logged out.");
        toast.error("Please contact admin. You are not logged out.");
      }
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error(error.message);
    }
  };

  return (
    <LogInContext.Provider value={{ isLoggedIn, login, logout, user }}>
      <NavbarMain />
      <main>
        <Routes>
          {/* Public Routes */}
          {PublicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            {PrivateRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Route>

          {/* Fallback Route */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </main>
      <Footer />
      <Toaster position="top-right" />
    </LogInContext.Provider>
  );
}

export default App;
