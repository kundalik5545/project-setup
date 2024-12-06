import React from "react";
import { IndianRupee } from "lucide-react";
import { NavLink } from "react-router-dom";
const websiteName = import.meta.env.VITE_WEBSITE_NAME;

function WebsiteName() {
  return (
    <div>
      <NavLink
        to="/"
        className="flex items-center space-x-1 rtl:space-x-reverse"
      >
        <IndianRupee size={40} />
        <span className="self-center font-inter text-3xl font-semibold whitespace-nowrap dark:text-white">
          {websiteName}
        </span>
      </NavLink>
    </div>
  );
}

export default WebsiteName;
