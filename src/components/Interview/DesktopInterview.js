import React from "react";
import InterviewStyle from "./css/Interview.module.css";

const DesktopInterview = () => {

    const mainCon = InterviewStyle.mainCon;
    const imgCornerLeft = InterviewStyle.imgCornerLeft;
    const imgCornerRight = InterviewStyle.imgCornerRight;
    const contentCon = InterviewStyle.contentCon;
    const h1Style = InterviewStyle.h1Style;
    const videoCon = InterviewStyle.videoCon;

    return (
        <main className={mainCon}>
            <div className={imgCornerLeft}></div>
            <div className={imgCornerRight}></div>
            <section className={contentCon}>
                <h1 className={h1Style}><span>Life's Chapter 1</span></h1>
                <h1 className={h1Style}>Herman's Exclusive Interview</h1>
                <div className={videoCon}>
                    <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FDrSuccessMan%2Fvideos%2F5855939064510164%2F&show_text=false&width=560&t=0" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                </div>
            </section>
        </main>
    )
}

export default DesktopInterview;