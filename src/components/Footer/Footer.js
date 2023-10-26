import React from "react";
import FooterStyle from "./footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerDesktop = FooterStyle.footerDesktop;
  return (
    <footer className={footerDesktop}>
      COPY RIGHT @ {currentYear} DESIGNINGLORY.COM
    </footer>
  );
};

export default Footer;
