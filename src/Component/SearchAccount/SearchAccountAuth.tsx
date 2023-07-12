import React from "react";
import AppImg from "./img/Icon.png";
import classes from "./SearchAccountAuth.module.css";
import { Link } from "react-router-dom";

function SearchAccountAuth() {
  return (
    <div className={classes.outer}>
      <p>
        <img src={AppImg} className={classes.image} />
      </p>
      <p className={classes.header}>계정 찾기</p>
      <br />
      <p className={classes.text}>이메일로 보낸 인증번호를 입력해 주세요.</p>
      <input type="text" placeholder="인증번호" className={classes.Input} />
      <br />
      <Link to="/SearchAccount">
        <button type="button" id="cancel" className={classes.cancel}>
          취소
        </button>
      </Link>
      <Link to="/">
        <button type="button" id="search" className={classes.done}>
          인증 완료
        </button>
      </Link>
    </div>
  );
}

export default SearchAccountAuth;
