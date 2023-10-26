import React from "react";
import QuoteStyle from "./css/QuoteStyle.module.css";
import { Col, Row } from "react-bootstrap";

const QuoteSection = () => {
  const leftQuoteCol = QuoteStyle.leftQuoteCol;
  const rightQuoteCol = QuoteStyle.rightQuoteCol;
  const rowStyle = QuoteStyle.rowStyle;
  const quoteCon = QuoteStyle.quoteCon;
  const h2Title = QuoteStyle.h2Title;
  const contentCol = QuoteStyle.contentCol;
  const quoteDiv = QuoteStyle.quoteDiv;
  const wrapper = QuoteStyle.wrapper;
  const pStyle = QuoteStyle.pStyle;

  return (
    <>
      <div className={wrapper}>
        <Row className={rowStyle}>
          <Col xs={2} className={leftQuoteCol}></Col>
          <Col xs={7} className={contentCol}>
            <div className={quoteCon}>
              <div className={quoteDiv}>
                <h2 className={h2Title}>Title</h2>
                <p className={pStyle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco .
                </p>
              </div>
            </div>
          </Col>
          <Col xs={2} className={rightQuoteCol}></Col>
        </Row>
      </div>

      <div className={wrapper}>
        <Row className={rowStyle}>
          <Col xs={2} className={leftQuoteCol}></Col>
          <Col xs={7} className={contentCol}>
            <div className={quoteCon}>
              <h2 className={h2Title}>Title</h2>
              <p className={pStyle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco .
              </p>
            </div>
          </Col>
          <Col xs={2} className={rightQuoteCol}></Col>
        </Row>
      </div>
    </>
  );
};

export default QuoteSection;
