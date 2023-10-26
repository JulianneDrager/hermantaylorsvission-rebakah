import React from "react";
import HeaderStyle from "./css/Header.module.css";

const DesktopHeader = () => {
  const contentH2 = HeaderStyle.contentH2;
  const headerContent = HeaderStyle.headerContent;

  return (
    <div className={headerContent}>
      <h2 className={contentH2}>
        AUTHOR & <br /> PUBLIC SPEAKER
      </h2>
    </div>
  );
};

export default DesktopHeader;
