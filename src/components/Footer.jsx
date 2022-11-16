import React from "react";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = (props) => {
  return (
    <footer className="FooterWrapper">
      <div className="FooterContainer">
        <div>
          <div className="FooterTitle">Car rental in Israel</div>
          <ul>
            <li className="FooterLinks">
              <div className="FooterLink">general terms</div>
            </li>
            <li className="FooterLinks">
              <div className="FooterLink">About the company</div>
            </li>
            <li className="FooterLinks">
              <div className="FooterLink">Accessibility statement</div>
            </li>
          </ul>
        </div>

        <div>
          <div className="FooterTitle">about</div>
          <ul>
            <li className="FooterLinks">
              <div className="FooterLink">About</div>
            </li>
            <li className="FooterLinks">
              <div className="FooterLink">Contact Us</div>
            </li>
          </ul>
        </div>
        <p className="FooterCopyRight">
          All rights reserved to the car rental center company .
        </p>
        <div className="SocialLinks">
          <BsFacebook></BsFacebook>
          <BsInstagram></BsInstagram>
          <BsTwitter></BsTwitter>
          <BsYoutube></BsYoutube>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
