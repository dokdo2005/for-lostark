import { useState } from "react";
import "./css/app.css";
import letterIcon from "./imgs/lostark_letter.png";
import letterImg from "./imgs/letter_image_1.png";

const App = () => {
  const [isVisible, setVisible] = useState(false);

  const LetterPopup = () => {
    return (
      <div className="letterPopup">
        <a className="popupCloseBtn" onClick={() => setVisible(false)}>
          X
        </a>
        <img src={letterImg} width={"100%"} />
      </div>
    );
  };

  return (
    <div className="mainContainer">
      <img src={letterIcon} width={"65%"} />
      <div>&nbsp;</div>
      <div className="mainText">모험가의 편지가 도착했어요!</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <button
        className="letterOpenBtn"
        onClick={() => setVisible(true)}
        disabled={isVisible}
      >
        <p className="letterOpenBtnText">열어보기</p>
        <p className="letterOpenBtnSubText">모험가의 편지</p>
      </button>
      <div>&nbsp;</div>
      <div className="adListLink">
        <div><a href="https://youtu.be/IbcE55vdtTI" target={"_blank"} rel={"noreferrer"}>영혼을 데우는 답가</a></div>
        <div><a href="https://bit.ly/3qUrU42" target={"_blank"} rel={"noreferrer"}>
          판교역 광고 시안 모음
        </a></div>
      </div>
      {isVisible ? <LetterPopup /> : null}
    </div>
  );
};

export default App;
