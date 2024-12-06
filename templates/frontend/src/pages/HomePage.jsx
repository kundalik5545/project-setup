import { Button } from "@/components/ui/button";
import { IndianRupee, Wallet, UserPlus, LogIn } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LogInContext } from "../App";

const websiteName = import.meta.env.VITE_WEBSITE_NAME;

function HomePage() {
  const { isLoggedIn, user } = useContext(LogInContext);

  return (
    <div className="HomePage">
      <div className="HomePage-Main p-3 m-1 font-inter font-bold text-center">
        <h1 className="flex flex-wrap items-center justify-center space-x-1 space-y-3 sm:space-y-0">
          <span className="text-5xl">Welcome to </span>
          <span className="flex items-center  text-blue-500 text-3xl sm:text-4xl">
            <IndianRupee size={60} />
            <span className="text-4xl">{websiteName}</span>
          </span>
        </h1>
        <div className="HomePage-info-section">
          <p className="flex  flex-col text-lg p-2 font-inter pt-5">
            <span className="text-blue-600 text-xl pb-2">
              #1 Finance Tracking Application.
            </span>
            <span className="font-inter text-lg font-medium">
              💸 Earn Money By Tracking All Your Incomes And Expenses At One
              Place.
            </span>
          </p>
        </div>
      </div>
      <div className="HomePage-Sec1 flex items-center justify-center">
        <Wallet size={60} />
      </div>
      <div className="homepage-login-signup">
        {isLoggedIn ? (
          <>
            <p>Welcome JKs to home page.</p>
          </>
        ) : (
          <>
            <div className="menu-login-btn flex items-center justify-evenly sm:justify-center space-x-5   pt-4 pb-3 lg:hidden ">
              <Link to="sign-up">
                <Button size="lg">
                  <UserPlus /> Sign Up
                </Button>
              </Link>
              <Link to="login">
                <Button size="lg">
                  <LogIn />
                  Login
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default HomePage;
