import { FaceIcon } from "@radix-ui/react-icons";
import { Instagram, Github, Facebook, Youtube, Twitter } from "lucide-react";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import ShareUs from "./ShareUs";

function Footer() {
  //This is to move user from footer links to top of that page
  useEffect(() => {
    const handleLinkCLick = () => {
      window.scrollTo(0, 0);
    };
    // Attach click event listener to all NavLink elements
    const links = document.querySelectorAll(".footer-link");
    links.forEach((link) => {
      link.addEventListener("click", handleLinkCLick);
    });

    // Cleanup the event listener when component is unmounted
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleLinkCLick);
      });
    };
  }, []);

  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Company
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium ">
              <li className="mb-4">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:underline hover:text-white bg-blue-400 text-white p-2 px-3 rounded-sm "
                      : "footer-link hover:underline hover:text-blue-400"
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="contact-us"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:underline hover:text-white bg-blue-400 text-white p-2 px-3 rounded-sm "
                      : "footer-link hover:underline hover:text-blue-400"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/career"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:underline hover:text-white bg-blue-400 text-white p-2 px-3 rounded-sm "
                      : "footer-link hover:underline hover:text-blue-400"
                  }
                >
                  Careers
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:underline hover:text-white bg-blue-400 text-white p-2 px-3 rounded-sm "
                      : "footer-link hover:underline hover:text-blue-400"
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Help center
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <NavLink
                  to="https://wa.me/7030640807"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:underline hover:text-white bg-blue-400 text-white p-2 px-3 rounded-sm "
                      : "footer-link hover:underline hover:text-blue-400"
                  }
                >
                  WhatsApp
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="twitter"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:underline hover:text-white bg-blue-400 text-white p-2 px-3 rounded-sm "
                      : "footer-link hover:underline hover:text-blue-400"
                  }
                >
                  Twitter
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="https://www.instagram.com/kfinance_office"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:underline hover:text-white bg-blue-400 text-white p-2 px-3 rounded-sm "
                      : "footer-link hover:underline hover:text-blue-400"
                  }
                >
                  Instagram
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="https://www.t.me/kfinance_office"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:underline hover:text-white bg-blue-400 text-white p-2 px-3 rounded-sm "
                      : "footer-link hover:underline hover:text-blue-400"
                  }
                >
                  Telegram
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <NavLink
                  to="/privacy-policy"
                  end
                  className={({ isActive }) =>
                    isActive
                      ? "footer-link hover:underline hover:text-white bg-blue-400 text-white p-2 px-3 rounded-sm "
                      : "footer-link hover:underline hover:text-blue-400"
                  }
                >
                  Privacy Policy
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/licensing"
                  end
                  className={({ isActive }) =>
                    isActive
                      ? "hover:underline hover:text-white bg-blue-400 text-white p-2 px-3 rounded-sm "
                      : "footer-link hover:underline hover:text-blue-400"
                  }
                >
                  Licensing
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/terms-conditions"
                  end
                  className={({ isActive }) =>
                    isActive
                      ? "footer-link hover:underline hover:text-white bg-blue-400 text-white p-2 px-2 rounded-sm "
                      : "hover:underline hover:text-blue-400"
                  }
                >
                  Terms &amp; Conditions
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Download
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium ">
              <li className="mb-4">
                <NavLink
                  to="/ios"
                  end
                  className={({ isActive }) =>
                    isActive
                      ? "hover:underline hover:text-white bg-blue-400 text-white p-2 px-3 rounded-sm "
                      : "hover:underline hover:text-blue-400"
                  }
                >
                  iOS
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/android"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:underline hover:text-white bg-blue-400 text-white p-2 px-3 rounded-sm "
                      : "footer-link hover:underline hover:text-blue-400"
                  }
                >
                  Android
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/windows"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:underline hover:text-white bg-blue-400 text-white p-2 px-3 rounded-sm "
                      : "footer-link hover:underline hover:text-blue-400"
                  }
                >
                  Windows
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/macos"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:underline hover:text-white bg-blue-400 text-white p-2 px-3 rounded-sm "
                      : "footer-link hover:underline hover:text-blue-400"
                  }
                >
                  MacOS
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 flex flex-col space-y-3 md:flex md:items-center md:justify-between">
          <span className="text-lg text-center text-gray-500 dark:text-gray-300 sm:text-center">
            © 2024{" "}
            <a href="https://k-finance.vercel.app">
              {import.meta.env.VITE_WEBSITE_NAME}{" "}
            </a>
            . All Rights Reserved.
          </span>
          <ShareUs />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
