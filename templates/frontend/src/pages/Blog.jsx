import { User } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

function Blog() {
  return (
    <div className="container max-w-5xl p-3 mx-auto font-inter">
      <h2 className="text-3xl font-bold text-blue-500 mb-4">Blog</h2>
      <div className="calList">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-2">
          <NavLink
            to="/study-resources"
            className="p-4 bg-white rounded-lg flex flex-col items-center justify-center space-y-2 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <User />
            <span>Add study-resources</span>
          </NavLink>
          <NavLink
            to="/study-resources"
            className="p-4 bg-white rounded-lg flex flex-col items-center justify-center space-y-2 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            study-resources
          </NavLink>
          <NavLink
            to="/study-resources"
            className="p-4 bg-white rounded-lg flex flex-col items-center justify-center space-y-2 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            study-resources
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Blog;
