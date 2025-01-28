import React from "react";
import Fb from "../assets/Fb.svg";
import Insta from "../assets/Insta.svg";
import message from "../assets/message.svg";
import call from "../assets/call.svg";
import Twiter from "../assets/Twiter.svg";
import Pintrest from "../assets/Pintrest.svg";
import logo from "../assets/logo.svg";
import logo1 from "../assets/logo1.svg";
import search from "../assets/search.svg";

const Navbar = () => {
  return (
    <div>
      <div className="bg-primary py-2 flex text-white justify-end items-center px-4">
        <p className="flex gap-2 mx-2">
          <img src={call} alt="" /> <a href="/">www.registerkaro.in</a>
        </p>
        <p className="flex gap-2 before:content-['|'] mx-2">
          <img src={message} alt="" />
          <a href="tel:+918447746183" className="hover:text-secondary">
            {" "}
            +918447746183{" "}
          </a>
        </p>
        <p className="flex gap-2 before:content-['|']">
          <img className="cursor-pointer" src={Insta} />
          <img className="cursor-pointer" src={Fb} />
          <img className="cursor-pointer" src={Twiter} />
          <img className="cursor-pointer" src={Pintrest} />
        </p>
      </div>
      <div className="flex justify-between items-center p-2 px-12">
        <p>
          <img src={logo1} alt="" />
        </p>

        <ul className="flex gap-10">
          <li className="cursor-pointer font-semibold">Home</li>
          <li className="cursor-pointer font-semibold">About Us </li>
          <li className="cursor-pointer font-semibold">Clients </li>
          <li className="cursor-pointer font-semibold">Blogs</li>
          <li className="cursor-pointer font-semibold">Questions</li>
          <li className="cursor-pointer font-semibold">Live Count</li>
          <li className="cursor-pointer font-semibold">Form</li>
          <li>
            <img src={search} alt="" />
          </li>
          <li>
            <a className="bg-orange px-4 py-2 text-white" href="/">
              Talk An Expert
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
