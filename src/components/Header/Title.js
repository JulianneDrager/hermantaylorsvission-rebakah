import React from "react";
import HeaderStyle from "./css/Header.module.css";
import TitleImg from "../../images/mobile-header-images/mobile-header-title.png";
import { Image } from "react-bootstrap";

const Title = () => {
  const headerTitleContainer = HeaderStyle.headerTitleContainer;
  const headerTitle = HeaderStyle.headerTitle;

  return (
    <div className={headerTitleContainer}>
      <Image className={headerTitle} src={TitleImg} alt="Header Title" />
    </div>
  );
};

export default Title;
