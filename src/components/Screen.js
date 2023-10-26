import React from "react";
import Header from "./Header/Header";
import ComingSoon from "./Coming Soon/ComingSoon";
import comingSoonStyle from "./Coming Soon/css/ComingSoonStyle.module.css";
import Footer from "./Footer/Footer";

const Screen = () => {
  const marginStyle = comingSoonStyle.marginStyle;
  return (

    <div style={{maxWidth: "1220px", margin:"0 auto"}} className="p-0">
      <Header />
      <div className={marginStyle}>
      <ComingSoon/>
      <Footer/>
      </div>
      </div>
   
  );
};

export default Screen;
