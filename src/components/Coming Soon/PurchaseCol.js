import React from "react";
import PurchaseStyle from "./css/PurchaseStyle.module.css";
import { Col } from "react-bootstrap";
import BtnCs from "../ui/BtnCs";

const PurchaseCol = () => {
  const h1Style = PurchaseStyle.h1Style;
  const PurchaseCol = PurchaseStyle.PurchaseCol;
  const divBtn = PurchaseStyle.divBtn;

  return (
    <>
      <Col className={PurchaseCol}>
        <h1 className={h1Style}>Purchase <br/> Your Copy</h1>
        <div className={divBtn}>
          <BtnCs>click to order from amazon</BtnCs>
        </div>
      </Col>
    </>
  );
};

export default PurchaseCol;
