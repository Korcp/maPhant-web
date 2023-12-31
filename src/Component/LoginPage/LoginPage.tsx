import IconImg from "./img/Icon.png";
import AppImg from "./img/loginAppImg.png";
import classes from "./LoginPage.module.css";
import { Link } from "react-router-dom";
function LoginPage() {
  return (
    <div className={classes.outer}>
      <div className={classes.appImg}>
        <img src={AppImg} alt="" />
      </div>
      <div className={classes.LoginPage}>
        <h1>
          <img src={IconImg} />
        </h1>
        <p>과끼리에 오신것을 환영합니다 !</p>
        <input
          type="text"
          name="ID"
          id=""
          className={classes.Input}
          placeholder="아이디"
        />
        <br></br>
        <input
          type="password"
          name="password"
          className={classes.Input}
          placeholder="비밀번호"
        />
        <br />
        <Link to="/MainPage">
          <button id="LoginBtn" className={classes.button}>
            로그인
          </button>
        </Link>
        <br />
        <p className={classes.foundPwd}>
          비밀번호를 잊어버렸나요?ㅤ
          <Link to="/SearchAccount">
            <a className={classes.sign}>비밀번호찾기</a>
          </Link>
        </p>
        <br />
        <p className="new">
          아직 회원이 아니신가요?ㅤ
          <Link to="/Agree">
            <a className={classes.signup}>회원가입</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
export default LoginPage;
