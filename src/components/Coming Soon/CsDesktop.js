import React from "react";
import Book from "../../images/coming-soon-images/book-cover-with-fire-bottom.png";
import ComingSoonStyle from "./css/ComingSoonStyle.module.css";
import { Image, Row, Col } from "react-bootstrap";
import QuoteSection from "./QuoteSection";
import BookTitle from "./BookTitle";
import PcDesktop from "./PcDesktop";

const CsDeskTop = () => {
  const bookCol = ComingSoonStyle.bookCol;
  const fireBurstCol = ComingSoonStyle.fireBurstCol;
  const bookRow = ComingSoonStyle.bookRow;
  const quoteCol = ComingSoonStyle.quoteCol;
  const ComingSoonMainCon = ComingSoonStyle.ComingSoonMainCon;
  const divider = ComingSoonStyle.divider;

  return (
    <div className={ComingSoonMainCon}>
      <BookTitle />
      <div>
        <Row className={fireBurstCol}></Row>
        <div>
          <Row className={bookRow}>
            <Col xs={6}>
              <Image
                className={bookCol}
                // style={{ opacity: "0" }}
                src={Book}
                alt="book"
              />
            </Col>
            <Col id="hi" xs={1} className={divider}></Col>
            <Col className={quoteCol}>
              <QuoteSection />
            </Col>
          </Row>
          <PcDesktop />
        </div>
      </div>
    </div>
  );
};

export default CsDeskTop;
