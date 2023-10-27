import React from "react";
import HeaderStyle from "./css/Header.module.css";
import Facebook from "../../images/mobile-header-images/mobile-facebook.png";
import Instagram from "../../images/mobile-header-images/mobile-instagram.png";
import { Image } from "react-bootstrap";
import "../style.css";

const SocialMediaSection = () => {
  const facebookStyle = HeaderStyle.facebookStyle;
  const instagramStyle = HeaderStyle.instagramStyle;
  const headerLinksCon = HeaderStyle.headerLinksCon;

  return (
    <div className={headerLinksCon}>
      <a href="https://www.instagram.com/p/CxZMd2srL2P/">
        <Image className={facebookStyle} src={Facebook} alt="Facebook Icon" />
      </a>
      <a href="/https://www.facebook.com/herman.taylor.353">
        <Image
          className={instagramStyle}
          src={Instagram}
          alt="Instagram Icon"
        />
      </a>
    </div>
  );
};

export default SocialMediaSection;
