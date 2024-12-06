import React from "react";
import ShareUs from "@/Navbar/Footer/ShareUs";
import { Link } from "react-router-dom";
import { IndianRupee } from "lucide-react";
const WebsiteName = import.meta.env.VITE_WEBSITE_NAME;

function RightSideJoinUs() {
  return (
    <div>
      <div className="join-us flex flex-col flex-wrap items-center justify-center space-y-2">
        <span className="flex items-center justify-center p-1">
          <IndianRupee size={50} />
          <span className="text-2xl">{WebsiteName}</span>
        </span>
        <p className="text-center text-lg ">Join us to learn about finance</p>

        <Link className="flex items-center rounded-md p-2 text-lg  bg-black text-primary-foreground shadow ">
          <ShareUs
            size={"50"}
            iconClass={
              "transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 "
            }
          />
        </Link>
      </div>
    </div>
  );
}

export default RightSideJoinUs;
