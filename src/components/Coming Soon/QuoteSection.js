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
                <h2 className={h2Title}>My World In My Past</h2>
                <p className={pStyle}>
                  A lesson for Herman the new comer. I did not love myself at
                  this time, because I was still willing to put myself and my 75
                  days clean at risk for relapse, just for some company. My
                  heart was broken, and my soul was depleted.  I  see my son's
                  mother and her new man.  We are both in our cars he's driving
                  a BMW X6 I'm driving a Ford Edge. When I see her in the car, I
                  black out immediately, I forgot that we weren’t together, In
                  my mind, that’s my girl in that car. Therapist or crisis
                  intervention counseling was not an option in 1979.  Managing
                  my world was a real struggle, and I didn’t make the best
                  decision, but I did do the best that that I could.
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
              <h2 className={h2Title}>My God Did It</h2>
              <p className={pStyle}>
                The same finger that I used in 1993 to be fingerprinted when I
                was arrested was the same finger that I use to enter one police
                Plaza, Police headquarters to go to work. I have to say it
                again, wont God do it. Police plaza was my central office. The
                unit consisted of ten teams, made up of two police officers and
                one social worker per team.
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
