import React from "react";
import BtnStyle from "./btnStyle.module.css";
import { Button } from "react-bootstrap";

const BtnCs = (props) => {
  const headerBtnCs = BtnStyle.headerBtnCs;
  const headerBtnContainer = BtnStyle.headerBtnContainer;
  const sampleText = BtnStyle.sampleText;

  return (
    <div className={headerBtnContainer}>
      <Button className={headerBtnCs}>{props.children}</Button>
      <p className={sampleText}>*Sample two chapter excerpts below </p>
    </div>
  );
};

export default BtnCs;
