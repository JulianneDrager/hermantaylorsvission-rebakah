import React from "react";
import Header from "./Header/Header";
import ComingSoon from "./Coming Soon/ComingSoon";
import comingSoonStyle from "./Coming Soon/css/ComingSoonStyle.module.css";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";
import Interview from "./Interview/Interview";

const Screen = () => {
  const marginStyle = comingSoonStyle.marginStyle;
  const marginStyle2 = comingSoonStyle.marginStyle2;
  return (
    <div style={{ maxWidth: "1430px", margin: "0 auto" }} className="p-0">
      <Header />
      <div className={marginStyle}>
        <ComingSoon />
        <div className={marginStyle2}>
          <Interview />
           <Contact/>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Screen;
