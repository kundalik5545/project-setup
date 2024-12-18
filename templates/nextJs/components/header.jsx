import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";

function Header() {
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="B tracker logo"
            width={60}
            height={200}
            className="h-12 w-auto object-contain"
          />
        </Link>

        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <Link href={"/"}>
              <Button variant="outline">
                <span>Home</span>
              </Button>
            </Link>
            <Link href={"/about-us"}>
              <Button variant="outline">
                <span>About Us</span>
              </Button>
            </Link>
            <Link href={"/contact-us"}>
              <Button variant="outline">
                <span>Contact Us</span>
              </Button>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <SignedIn>
              <Link
                href={"/dashboard"}
                className="text-gray-600 hover:text-blue-600 items-center gap-2"
              >
                <Button variant="outline">
                  <LayoutDashboard size={18} />
                  <span className="hidden md:inline">Dashboard</span>
                </Button>
              </Link>

              <Link
                href={"/transaction/create"}
                className="flex items-center gap-2"
              >
                <Button>
                  <PenBox size={18} />
                  <span className="hidden md:inline">Add Transaction</span>
                </Button>
              </Link>
            </SignedIn>
            <SignedOut>
              <SignInButton forceRedirectUrl="/dashboard">
                <Button variant="outline">Login</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
