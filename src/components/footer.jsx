import { Link } from "react-router-dom";
import Logo from "../assets/getlinkedlogo.png";
import Location from "../assets/location.png";
import Phone from "../assets/phone.png";
import Twitter from "../assets/twitter.png";
import Fb from "../assets/fb.png";
import Insta from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";

function Footer() {
  return (
    <>
      <footer className="bg-background-col text-white">
        <div className="grid place-items-center">
          <div className="flex flex-col lg:flex-row items-start justify-center gap-8">
            <div className=" w-[217px] lg:w-[412px]">
              <img src={Logo} alt="" />
              <p>
                Getlinked Tech Hackathon is a technology innovation program
                established by a group of organizations with the aim of
                showcasing young and talented individuals in the field of
                technology
              </p>
              <div className=" lg:mt-20 flex gap-4">
                <p className=" border-r-tet-col border-r-2 pr-4">
                  Terms of Use
                </p>
                <p> Privacy Policy</p>
              </div>
            </div>

            {/* useful links */}
            <div className="flex flex-col">
              <p className=" font-semibold text-sm text-tet-col">
                Useful Links
              </p>
              <a href="#hero">Overview</a>
              <a href="#">Timeline</a>
              <a href="#faq">FAQs</a>
              <Link to="/register">Register</Link>
              <div className="flex gap-4">
                <p>Follow us</p>
                <div className="flex items-center gap-5">
                  <img src={Insta} alt="" />
                  <img src={Twitter} alt="" />
                  <img src={Fb} alt="" />
                  <img src={linkedin} alt="" />
                </div>
              </div>
            </div>

            {/* Contact Us */}
            <div>
              <p className=" font-semibold text-sm text-tet-col">Contact Us</p>
              <div className="flex items-center justify-start gap-4">
                <img src={Phone} alt="" />
                <p>+234 6707653444</p>
              </div>
              <div className="flex items-center justify-start gap-4">
                <img src={Location} alt="" />
                <p className="w-[89px]">
                  27,Alara Street Yaba 100012 Lagos State
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pt-[60px] pb-[53px]">
          All rights reserved. © getlinked Ltd.
        </div>
      </footer>
    </>
  );
}

export default Footer;
