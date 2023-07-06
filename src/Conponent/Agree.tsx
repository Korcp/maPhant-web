import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Agree.css";
import IconImg from "./img/Icon.png";

function Agree() {
  const textareaRef1 = useRef<HTMLTextAreaElement>(null);
  const textareaRef2 = useRef<HTMLTextAreaElement>(null);
  const textareaRef3 = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    adjustInputHeight(textareaRef1.current);
    adjustInputHeight(textareaRef2.current);
    adjustInputHeight(textareaRef3.current);
  }, []);

  const adjustInputHeight = (textareaRef: HTMLTextAreaElement | null) => {
    if (textareaRef) {
      textareaRef.style.height = "auto";
      textareaRef.style.height = textareaRef.scrollHeight + "px";
    }
  };

  return (
    <div className="outer">
      <nav className="AgreePadding">
        <div className="divid">
          <img src={IconImg} alt="" />
          <br />
          <br />
          <br />
        </div>
        <div className="boxes">
          <input type="checkbox" id="check1" />
          <b>전체 동의하기</b>
          <div className="auto-size-input-container">
            <textarea
              value={
                "실명 인증된 아이디로 가입, 이용약관(선택) 동의를 포함합니다"
              }
              ref={textareaRef1}
              onChange={() => adjustInputHeight(textareaRef1.current)}
            />
          </div>
        </div>
        <div className="divid2">
          <input type="checkbox" id="check2" />
          <b>[필수] 과끼리 이용약관 &gt;</b>
          <br />
          <textarea
            value={`개인정보보헙법에 따라 과끼리에 회원가입 신청하시는 분께 수집하는 개인정보의 항목,개인정복의 수집 및 이용목적, 개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.`}
            ref={textareaRef2}
            onChange={() => adjustInputHeight(textareaRef2.current)}
          />
        </div>
        <br />
        <div className="divid3">
          <input type="checkbox" id="check3" />
          <b>[필수] 커뮤니티 이용수칙 확인 &gt;</b>
          <br />
          <textarea
            value={`개인정보보헙법에 따라 과끼리에 회원가입 신청하시는 분께 수집하는 개인정보의 항목,개인정복의 수집 및 이용목적, 개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.`}
            ref={textareaRef3}
            onChange={() => adjustInputHeight(textareaRef3.current)}
          />
        </div>
        <br />
        <div className="check4">
          <Link to="/SelectSch">
            <button type="submit">다음</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Agree;
