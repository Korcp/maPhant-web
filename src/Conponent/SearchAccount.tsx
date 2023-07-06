import React from "react";
import classes from "./SearchAccount.module.css";
import AppImg from "./img/Icon.png";
import { Link } from "react-router-dom";

function SearchAccount() {
  return (
    <div>
      <div className={classes.outer}>
        <p>
          <img src={AppImg} className={classes.image} />
        </p>
        <p className={classes.header}>계정 찾기</p>
        <br />
        <p className={classes.text}>
          회원 가입시 입력하신 이메일 주소를 입력하시면,
          <br /> 해당 이메일로 아이디 및 비밀번호 변경 링크를 보내드립니다.
        </p>
        <input
          type="text"
          placeholder="이메일 주소를 입력하세요"
          className={classes.Input}
        />
        <br />
        <Link to="/">
          <button type="button" id="cancel" className={classes.cancel}>
            취소
          </button>
        </Link>
        <button type="button" id="search" className={classes.search}>
          계정 찾기
        </button>
      </div>
    </div>
  );
}

export default SearchAccount;
