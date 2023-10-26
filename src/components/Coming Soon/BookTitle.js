import React from "react";
// import title from "../../images/coming-soon-images/book-title.png";
import BookStyle from "./css/BookStyle.module.css";
// import { Image } from "react-bootstrap";

const BookTitle = () => {
  const bookTitleCon = BookStyle.bookTitleCon;
  const subBookTitleCon = BookStyle.subBookTitleCon;
  const smallTitle = BookStyle.smallTitle;

  return (
    <>
      <div className={bookTitleCon}>
        <div className={subBookTitleCon}>
        <p className={smallTitle}>COMING SOON TO A BOOK STORE NEAR YOU</p>
          <p>FROM NOTHING TO ALMOST SOMETHING</p>
        </div>
      </div>
    </>
  );
};

export default BookTitle;
