import { headerLogo } from "../assets/images/";

const Navbar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between max-container items-center">
        <a href="#">
          <img src={headerLogo} alt="" />
        </a>
        <a>Home</a>
        <a>About Us</a>
        <a>Products</a>
        <a>Contact Us</a>
        <a className="font-medium cursor-pointer hover:scale-105 hover:animate-bounce">
          Sign in / ExploreNow
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
