import { useState } from "react";
import Logo from "../assets/getlinkedlogo.png";
import menu from "../assets/menu.png";
import Button from "./button";
import { Link } from "react-router-dom";

function Header() {
  const [open, setIsOpen] = useState(false);
  return (
    <>
      <header
        className="flex items-center justify-around bg-background-col
       text-white pt-[34px] lg:pt-[63px] pb-4 lg:pb-[25px] relative"
      >
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div className=" hidden lg:flex gap-14 items-center rounded">
          <Link>Timeline</Link>
          <Link>Overview</Link>
          <Link>FAQs</Link>
          <Link to="/contact">Contact</Link>
          <Button />
        </div>

        <div className="lg:hidden">
          <img
            src={menu}
            className=""
            onClick={() => setIsOpen(!open)}
            alt="menu"
          />
        </div>

        {/* mobile nav */}
        {open && (
          <div
            className="lg:hidden absolute top-0 right-0 w-[348px] pl-47px]
         bg-background-col z-10"
          >
            <div
              className="border-gradient inline-block p-4 ml-auto"
              onClick={() => setIsOpen(!open)}
            >
              x
            </div>
            <div className="flex flex-col items-start">
              <p>Timeline</p>
              <p>Overview</p>
              <p>FAQs</p>
              <Link to="/contact">Contact</Link>
              <Button />
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
