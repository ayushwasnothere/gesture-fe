import { Link, useLocation } from "react-router-dom";
import React from "react";

export const Navbar: React.FC = () => {
  const { pathname: path } = useLocation();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[5px] bg-black/30 px-8 2xl:px-80 py-6 select-none">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-white font-bold text-6xl font-inter drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]">
            Gesture Flow
          </div>
        </div>

        <div className="flex items-center gap-10 font-inter">
          <Link to="/">
            <div
              className={`text-xl font-semibold cursor-pointer drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:text-pink-400 hover:scale-105 transition-all ease-in ${path == "/" ? "text-pink-400 border-b-2 p-b-2" : "text-white/80"}`}
            >
              Home
            </div>
          </Link>
          <Link to="/dashboard">
            <div
              className={`text-xl font-semibold cursor-pointer drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:text-pink-400 hover:scale-105 transition-all ease-in ${path == "/dashboard" ? "text-pink-400 border-b-2 p-b-2" : "text-white/80"}`}
            >
              Dashboard
            </div>
          </Link>
          <Link to="/about">
            <div
              className={`text-xl font-semibold cursor-pointer drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:text-pink-400 hover:scale-105 transition-all ease-in ${path == "/about" ? "text-pink-400 border-b-2 p-b-2" : "text-white/80"}`}
            >
              About
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};
