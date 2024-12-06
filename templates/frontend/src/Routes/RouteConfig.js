import SignUp from "@/components/Auth/SignUp";
import Login from "@/components/Auth/Login";

import HomePage from "@/pages/HomePage";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

import TermsAndConditions from "@/components/Legal/TermsAndConditions";
import PrivacyPolicy from "@/components/Legal/PrivacyPolicy";
import Blog from "@/pages/Blog";

//Protected Routes
import Dashboard from "@/components/Dashboard/Dashboard";

// Public Routes
export const PublicRoutes = [
  { path: "/", Component: HomePage },
  { path: "/sign-up", Component: SignUp },
  { path: "/login", Component: Login },
  { path: "/about", Component: About },
  { path: "/contact-us", Component: Contact },
  { path: "/blog", Component: Blog },
  { path: "/terms-conditions", Component: TermsAndConditions },
  { path: "/privacy-policy", Component: PrivacyPolicy },
];

// Protected Routes
export const PrivateRoutes = [{ path: "/dashboard", Component: Dashboard }];
