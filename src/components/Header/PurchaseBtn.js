import React from "react";
import HeaderStyle from "./css/Header.module.css";
import { Button } from "react-bootstrap";

const PurchaseBtn = () => {
  const headerBtn = HeaderStyle.headerBtn;
  const headerBtnContainer = HeaderStyle.headerBtnContainer;

  return (
    <div className={headerBtnContainer}>
      <Button className={headerBtn}>PURCHASE NOW</Button>
    </div>
  );
};

export default PurchaseBtn;
