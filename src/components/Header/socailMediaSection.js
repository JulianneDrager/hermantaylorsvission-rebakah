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
      <a href="/">
        <Image className={facebookStyle} src={Facebook} alt="Facebook Icon" />
      </a>
      <a href="/">
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
