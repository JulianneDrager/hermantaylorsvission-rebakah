import React from "react";
import HeaderStyle from "./css/Header.module.css";
import SocialMediaSection from "./socailMediaSection";
import HeaderImage from "../../images/header-images//herman-header-image.png";
import Title from "./Title";
import SubTitle from "./SubTitle";

import { Button, Image } from "react-bootstrap";

const DesktopHeader = () => {
  const rowHeight = HeaderStyle.rowHeight;
  const subTitleCol = HeaderStyle.subTitleCol;
  const BottomRightTri = HeaderStyle.BottomRightTri;
  const HeadImgSize = HeaderStyle.HeadImgSize;
  const headContainer = HeaderStyle.headContainer;
  const headSection1 = HeaderStyle.headSection1;
  const headerBtn = HeaderStyle.headerBtn;

  return (
    <>
      <div className={headContainer}>
        <div className={headSection1}>
          <div className={rowHeight}></div>
          <div>
            <Title />
            <div className={subTitleCol}>
              <SubTitle />
              <Button className={headerBtn}>PURCHASE NOW</Button>
              <SocialMediaSection />
            </div>
          </div>
        </div>
        <Image src={HeaderImage} className={HeadImgSize} />
      </div>
      <div>
        <div className={BottomRightTri}></div>
        <div></div>
      </div>
    </>
  );
};

export default DesktopHeader;
