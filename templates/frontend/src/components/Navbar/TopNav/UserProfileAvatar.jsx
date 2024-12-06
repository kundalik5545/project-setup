import {
  LayoutDashboard,
  LogOut,
  Mail,
  Settings,
  User,
  User2Icon,
  Wallet,
} from "lucide-react";
import React, { useContext } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link } from "react-router-dom";
import { LogInContext } from "@/App";

function UserProfileAvatar({ userImg, userName, userEmail }) {
  const { logout } = useContext(LogInContext);

  return (
    <div className="flex justify-center items-center p-2 m-2">
      <Popover>
        <PopoverTrigger>
          {userImg ? (
            <img
              className="w-10 h-10 bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              src={userImg}
              alt="user photo"
            />
          ) : (
            <User
              size={35}
              color="white"
              className="p-1 bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            />
          )}
        </PopoverTrigger>
        <PopoverContent className="max-w-xs md:max-w-md lg:max-w-lg mx-auto">
          <div className="p-3">
            <div className="flex items-center space-x-2 mb-2">
              <User2Icon className="text-gray-700 dark:text-white" />
              <span className="text-lg text-black dark:text-white">
                {userName}
              </span>
            </div>
            <span className="flex items-center space-x-2 mb-2 text-sm text-gray-500 truncate dark:text-gray-400 ">
              <Mail />
              <span className="text-sm font-sans text-black dark:text-white">
                {userEmail}
              </span>
            </span>
            <hr className="mb-2" />
            <ul className="space-y-1" aria-labelledby="user-menu-button">
              <li>
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-2 px-3 py-1 text-sm text-gray-700 hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white transition-colors duration-200 ease-in-out"
                >
                  <LayoutDashboard />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center space-x-2 px-3 py-1 text-sm text-gray-700 hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  <Settings />
                  <span>Settings</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="flex items-center space-x-2 px-3 py-1 text-sm text-gray-700 hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  <Wallet />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={logout}
                  className="flex items-center space-x-2 px-3 py-1 text-sm text-gray-700 hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  <LogOut />
                  <span>Sign out</span>
                </Link>
              </li>
            </ul>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default UserProfileAvatar;
