import React from "react";
import Header from "./Header/Header";
import ComingSoon from "./Coming Soon/ComingSoon";
import comingSoonStyle from "./Coming Soon/css/ComingSoonStyle.module.css";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";

const Screen = () => {
  const marginStyle = comingSoonStyle.marginStyle;
  return (

    <div style={{maxWidth: "1220px", margin:"0 auto"}} className="p-0">
      <Header />
      <div className={marginStyle}>
      <ComingSoon/>
      <Contact/>
      <Footer/>
      </div>
      </div>
   
  );
};

export default Screen;
