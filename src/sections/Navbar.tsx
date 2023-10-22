import { useState } from "react";
import { hamburger } from "../assets/icons/index.js";
import { headerLogo } from "../assets/images/";
import { navLinks } from "../constants/constants.js";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const handleNavOpen = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between max-container items-center">
        <a href="#">
          <img src={headerLogo} alt="" />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((e, index) => (
            <li key={index}>
              <a
                className="font-montserrat text-lg text-slate-gray"
                href={e.href}
              >
                {e.label}
              </a>
            </li>
          ))}

          <a className="font-medium cursor-pointer hover:scale-105 hover:animate-bounce">
            Sign in / ExploreNow
          </a>
        </ul>
        <div>
          <img
            onClick={handleNavOpen}
            className="lg:hidden cursor-pointer"
            src={hamburger}
            width={25}
            height={25}
          />
        </div>
        {navOpen && (
          <nav className="fixed right-0 top-0 h-screen flex w-full justify-between">
            <div className="bg-transparent w-4/5" onClick={handleNavOpen}></div>
            <div className="flex bg-[#FF6452] h-screen">
              <button className="absolute right-2 rounded-full shadow-md">
                x
              </button>
              <ul className="flex flex-col space-y-4 ml-5 mt-4 justify-center items-center">
                {navLinks.map((e) => (
                  <li>
                    <a
                      className="font-montserrat text-lg text-black"
                      href={e.href}
                    >
                      {e.label}
                    </a>
                  </li>
                ))}

                <a className="font-medium cursor-pointer hover:scale-105 hover:animate-bounce">
                  Sign in / ExploreNow
                </a>
              </ul>
            </div>
          </nav>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
