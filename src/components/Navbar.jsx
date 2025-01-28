import React from "react";
import Fb from "../assets/Fb.svg";
import Insta from "../assets/Insta.svg";
import message from "../assets/message.svg";
import call from "../assets/call.svg";
import Twiter from "../assets/Twiter.svg";
import Pintrest from "../assets/Pintrest.svg";


const Navbar = () => {
  return (
    <div className="bg-primary py-2 flex text-white justify-end items-center px-4">
      <p className="flex gap-2">
        <img src={call} alt="" /> www.registerkaro.in
      </p>
      <p className="flex gap-2 before:content-['|']">   
        <img src={message} alt="" />
        +918447746183
      </p>
      <p className="flex gap-2 before:content-['|']">
        <img src={Insta} />
        <img src={Fb} />
        <img src={Twiter} />
        <img src={Pintrest} />
      </p>
    </div>
  );
};

export default Navbar;
