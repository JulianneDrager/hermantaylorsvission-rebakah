import React from "react";
import Book from "../../images/coming-soon-images/book-cover-with-fire-bottom.png";
import ComingSoonStyle from "./css/ComingSoonStyle.module.css";
import { Image, Row, Col } from "react-bootstrap";
import QuoteSection from "./QuoteSection";
import PurchaseSection from "./PurchaseCol";
import BookTitle from "./BookTitle";
import useMediaQuery from "../UseMediaQuery";
import CsDesktop from "./CsDesktop";
import Btn from "../ui/Btn";

const ComingSoon = () => {
  const bookCol = ComingSoonStyle.bookCol;
  const fireBurstCol = ComingSoonStyle.fireBurstCol;
  const bookRow = ComingSoonStyle.bookRow;
  const bookCoverCon = ComingSoonStyle.bookCoverCon;
  const ComingSoonMainCon = ComingSoonStyle.ComingSoonMainCon;
  const cornerImage = ComingSoonStyle.cornerImage;
  const matchesMinWidth765 = useMediaQuery("(min-width:600px)");

  return (
    <>
      {!matchesMinWidth765 && (
        <div className={ComingSoonMainCon}>
          <BookTitle />
          <div className={bookCoverCon}>
            <Row className={fireBurstCol}></Row>
            <Row className={bookRow}>
              <Col xs={6}>
                <Image className={bookCol} src={Book} alt="book" />
              </Col>
              <PurchaseSection />
            </Row>
            <QuoteSection />
            <div style={{ margin: " 1rem 0 0 0" }}>
              <Btn>CONTACT HERMAN TODAY</Btn>
            </div>
            <div className={cornerImage}></div>
          </div>
        </div>
      )}
      {matchesMinWidth765 && <CsDesktop />}
    </>
  );
};

export default ComingSoon;
