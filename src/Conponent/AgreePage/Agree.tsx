import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Agree.css";
import IconImg from "./img/Icon.png";

function Agree() {
  const [checked1, SetChecked1] = useState(false); // 첫번째 약관 체크
  const [checked2, SetChecked2] = useState(false); // 두번째 약관 체크
  const [checked3, SetChecked3] = useState(false); // 세번째 약관 체크
  const navigate = useNavigate();
  function allCheck() {
    if (
      checked1 === checked2 &&
      checked2 === checked3 &&
      checked1 === checked3
    ) {
      SetChecked1(!checked1);
      SetChecked2(!checked2);
      SetChecked3(!checked3);
    } else if (checked1 && !checked2 && checked3) SetChecked2(!checked2);
    else if (!checked1 && checked2 && checked3) SetChecked1(!checked1);
    else if (checked1 && checked2 && !checked3) SetChecked3(!checked3);
    else if (checked1 && !checked2 && !checked3) {
      SetChecked2(!checked2);
      SetChecked3(!checked3);
    } else if (!checked1 && checked2 && !checked3) {
      SetChecked1(!checked1);
      SetChecked3(!checked3);
    } else if (!checked1 && !checked2 && checked3) {
      SetChecked1(!checked1);
      SetChecked2(!checked2);
    }
  }

  function btnChecked() {
    //disable떄문에 실행안되는듯;
    if (!(checked1 && checked2 && checked3)) {
      alert("모든 약관을 동의해야 합니다.");
    } else navigate("/Signup");
  }

  return (
    <div className="PagePadding">
      <nav>
        <div className="divid">
          <img src={IconImg} alt="" />
          <br />
          <br />
          <br />
        </div>

        <div className="boxes">
          <input
            type="checkbox"
            id="check1"
            onChange={() => allCheck()}
            checked={checked1 && checked2 && checked3}
          />
          <b>전체 동의하기</b>
        </div>
        <div className="Area1">
          <textarea
            className="textarea1"
            value={
              "실명 인증된 아이디로 가입, 이용약관(선택) 동의를 포함합니다"
            }
          />
        </div>

        <div className="divid2">
          <input
            type="checkbox"
            id="check2"
            checked={checked1}
            onChange={() => SetChecked1(!checked1)}
          />
          <b>[필수] 과끼리 이용약관 &gt;</b>
          <br />
        </div>
        <div className="Area2">
          <textarea
            className="textarea2"
            value={`개인정보보호법에 따라 과끼리에 회원가입 신청하시는 분께 수집하는 개인정보의 항목,개인정복의 수집 및 이용목적, 개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.`}
          />
        </div>
        <br />

        <div className="divid3">
          <input
            type="checkbox"
            id="check3"
            checked={checked2}
            onChange={() => SetChecked2(!checked2)}
          />
          <b>[필수] 커뮤니티 이용수칙 확인 &gt;</b>
          <br />
        </div>
        <div className="Area3">
          <textarea
            className="textarea3"
            value={`개인정보보헙법에 따라 과끼리에 회원가입 신청하시는 분께 수집하는 개인정보의 항목,개인정복의 수집 및 이용목적, 개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.`}
          />
          <br />
        </div>
        <div className="divid4">
          <input
            type="checkbox"
            id="check4"
            checked={checked3}
            onChange={() => SetChecked3(!checked3)}
          />
          <b>[필수] 개인정보 수집 이용 동의서</b>
          <br />
        </div>
        <div className="Area4">
          <textarea
            className="textarea4"
            value={`1. 수집하는 개인정보 항목 학교, 학과, 학번 \n2. 개인정보의 수집 및 이용 목적 제공하신 정보는 과끼리 앱 사용 확인을 위해 사용합니다. 본인 확인 식별 (동명이인 등) 절차에 이용(학교, 학과,학번) 의사소통 및 정보 전달 등에 이용 (학교,학과,학번) \n3. 개인정보의 보유 및 이용기산 수집된 개인정보의 보유 기간은 <과끼리> 사용후 탈퇴 시 ,당사자는 개인 정보를 재생 불가능한 방법으로 즉시 파기합니다 귀하는 이에대한 동의를 거부할 수 있습니다. 다만 동의가 없을 경우 <과끼리> 사용이 불가능할 수도 있음을 알려드립니다.`}
          />
        </div>
        <div className="check4">
          <button type="submit" onClick={() => btnChecked()}>
            다음
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Agree;
