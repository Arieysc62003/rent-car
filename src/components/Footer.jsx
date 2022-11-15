import React from "react";
import ReactDOM from "react-dom/client";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = (props) => {
  return (
    <footer className="FooterWrapper">
      <div className="FooterTitle">Rent Car </div>

      <div className="FooterContainer">
        <div>
          <div className="FooterLinkTitle">Product</div>
          <ul>
            <li className="FooterLinks">
              <div className="FooterLink">Dowload</div>
            </li>
            <li className="FooterLinks">
              <div className="FooterLink">Status</div>
            </li>
            <li className="FooterLinks">
              <div className="FooterLink">Rent car App</div>
            </li>
          </ul>
        </div>

        <div>
          <div className="FooterLinkTitle">Compnay</div>
          <ul>
            <li className="FooterLinks">
              <div className="FooterLink">About</div>
            </li>
            <li className="FooterLinks">
              <div className="FooterLink">Branding</div>
            </li>
            <li className="FooterLinks">
              <div className="FooterLink">Sales</div>
            </li>
          </ul>
        </div>
        <p className="FooterCopyRight">
          All rights reserved to the car rental center company - notice board:
          cars for rent Do not use any content that appears in the car rental
          center.
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
