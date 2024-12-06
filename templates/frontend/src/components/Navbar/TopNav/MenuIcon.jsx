import { LogOut, Menu, X, UserPlus, LogIn } from "lucide-react";
import React, { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { LogInContext } from "@/App";
import axios from "axios";

function MenuIcon() {
  const { isLoggedIn, logout } = useContext(LogInContext);
  const [closeMenus, setCloseMenus] = useState(false);
  const handleOpenMenuIcon = () => {
    setCloseMenus(!closeMenus);
  };

  const handleCloseMenu = () => {
    setCloseMenus(false);
  };

  return (
    <div className="relative">
      <Button onClick={handleOpenMenuIcon} className="z-10">
        {closeMenus ? (
          <X className="text-white" />
        ) : (
          <Menu className="text-white" />
        )}
      </Button>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-black text-white w-2/3 md:w-1/3 transform transition-transform duration-300 ease-in-out ${
          closeMenus ? "translate-x-0" : "translate-x-full"
        } z-20`}
      >
        {/* Close Icon */}
        <div className="flex justify-end p-4">
          <X className="text-white cursor-pointer" onClick={handleCloseMenu} />
        </div>

        {/* Navigation Links */}
        <div className="p-6">
          <ul className="mt-4 space-y-4 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded ${isActive ? "bg-blue-700" : ""}`
                }
                onClick={handleCloseMenu}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded ${isActive ? "bg-blue-700" : ""}`
                }
                onClick={handleCloseMenu}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/calculators"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded ${isActive ? "bg-blue-700" : ""}`
                }
                onClick={handleCloseMenu}
              >
                Calculators
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded ${isActive ? "bg-blue-700" : ""}`
                }
                onClick={handleCloseMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded ${isActive ? "bg-blue-700" : ""}`
                }
                onClick={handleCloseMenu}
              >
                Blog
              </NavLink>
            </li>
          </ul>
          {isLoggedIn ? (
            <></>
          ) : (
            <>
              <div className="logout-btn pt-5 flex items-center justify-start w-full ">
                <Button onClick={(logout, handleCloseMenu)}>
                  <LogOut /> <span>Log Out</span>
                </Button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Overlay to close menu when clicking outside */}
      {closeMenus && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={handleCloseMenu}
        ></div>
      )}
    </div>
  );
}

export default MenuIcon;
