import React from "react";
import { Row, Card } from "react-bootstrap";
import ContactStyle from "../Contact.module.css";

const Title = () => {
  const contactTitle = ContactStyle.contactTitle;

  return (
    <>
      <Row>
        <h1 className={contactTitle}>
          Contact Us
        </h1>
      </Row>
    </>
  );
};
export default Title;
