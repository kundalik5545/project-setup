import React from "react";
import { Instagram, Github, Facebook, Youtube, Twitter } from "lucide-react";

function ShareUs({ iconSize, iconClass, iconColor }) {
  return (
    <div>
      <div className="flex items-center justify-center p-1 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
        <a href="#" className={iconClass}>
          <Facebook size={iconSize} color={iconColor} />
          <span className="sr-only">Facebook page</span>
        </a>
        <a href="#" className={iconClass}>
          <Twitter size={iconSize} color={iconColor} />
          <span className="sr-only">Discord community</span>
        </a>
        <a href="#" className={iconClass}>
          <Youtube size={iconSize} color={iconColor} />
          <span className="sr-only">Twitter page</span>
        </a>
        <a href="#" className={iconClass}>
          <Github size={iconSize} color={iconColor} />
          <span className="sr-only">GitHub account</span>
        </a>
        <a href="#" className={iconClass}>
          <Instagram size={iconSize} color={iconColor} />
        </a>
      </div>
    </div>
  );
}

export default ShareUs;
