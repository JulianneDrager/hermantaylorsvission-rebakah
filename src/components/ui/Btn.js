import React from "react";
import BtnStyle from "./btnStyle.module.css";
import { Button } from "react-bootstrap";

const Btn = (props) => {
  const headerBtn = BtnStyle.headerBtn;
  const headerBtnContainer = BtnStyle.headerBtnContainer;

  return (
    <div className={headerBtnContainer}>
      <Button className={headerBtn}>{props.children}</Button>
    </div>
  );
};

export default Btn;
