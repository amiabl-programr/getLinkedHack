import Logo from "../assets/getlinkedlogo.png";
import menu from "../assets/menu.png";
import Button from "./button";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header
        className="flex items-center justify-around bg-background-col
       text-white pt-[34px] lg:pt-[63px] pb-4 lg:pb-[25px]"
      >
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div className=" hidden lg:flex gap-14 items-center rounded">
          <Link>Timeline</Link>
          <Link>Overview</Link>
          <Link>FAQs</Link>
          <Link>Contact</Link>
          <Button />
        </div>

        <div className="lg:hidden">
          {" "}
          <img src={menu} alt="menu" />
        </div>
      </header>
    </>
  );
}

export default Header;
