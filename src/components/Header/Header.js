import React from "react";
import HeaderStyle from "./css/Header.module.css";
import SocialMediaSection from "./socailMediaSection";
import Title from "./Title";
import SubTitle from "./SubTitle";
import PurchaseBtn from "./PurchaseBtn";
import DesktopHeaderComp from "./DesktopHeader";
import useMediaQuery from "../UseMediaQuery";

const DesktopHeader = () => {
  const headerImgBack = HeaderStyle.headerImgBack;
  const gradient = HeaderStyle.gradient;
  const headerRow = HeaderStyle.headerRow;
  const socailMediaCol = HeaderStyle.socailMediaCol;
  const fireBottom = HeaderStyle.fireBottom;
  const bkcolor = { color: "transparent" };
  const headContainer = HeaderStyle.headContainer;
  const headSection1 = HeaderStyle.headSection1;
  const matchesMinWith665 = useMediaQuery("(min-width:665px)");

  return (
    <>
      { !matchesMinWith665 &&
        <>
          <div className={headContainer}>
            <div className={headSection1}>
              <Title />
              <div className={headerImgBack}>
                <div className={gradient}>
                  <div  className={headerRow}>
                    <div style={bkcolor}></div>
                    <div className={socailMediaCol}>
                      <SocialMediaSection />
                    </div>
                  </div>
                  <div >
                    <div><SubTitle /></div>
                    <div><PurchaseBtn/></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={fireBottom}></div>
        </>
      }
      {matchesMinWith665  && <DesktopHeaderComp />}
    </>
  );
};

export default DesktopHeader;
