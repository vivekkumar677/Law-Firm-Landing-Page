import React from "react";
import "./Footer.css";
import Pinterest from "../../assets/pintrest.png";
import Instagram from "../../assets/instagram.png";
import Twitter from "../../assets/tweeter.png";
import Facebook from "../../assets/facebook.png";
import Logo from '../../assets/logo.png'

const itemList = ["Home", "Attroneys", "Practice Areas", "About Us"];
const iconList = [Instagram, Facebook, Twitter, Pinterest];

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="first-row-wrapper">
        <div className="footer-logo">
          <img src={Logo} alt="Logo" width={143} height={30.3} />
        </div>
        <div className="list-item-wrapper">
          <ul>
            {itemList.map((each, index) => (
              <li key={index}>{each}</li>
            ))}
          </ul>
        </div>
        <div className="icon-wrapper">
          <ul className="list-container">
            {iconList.map((eachIcon, index) => (
              <li key={index}>
                <img src={eachIcon} alt="Icon" width={30} height={30} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="website-detail">
        <p>© 2024 Acme. All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </div>
  );
};

export default Footer;
