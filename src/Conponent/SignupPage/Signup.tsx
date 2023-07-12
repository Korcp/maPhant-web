import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  return (
    <div className="SignupMain">
      <p className="SignupTitle">회원가입</p>

      <div className="container">
        <div className="inputcontainer">
          <p className="label">학교</p>
          <input
            className="inputField"
            type="text"
            placeholder="학교를 입력해주세요"
          />
        </div>
      </div>
      <div className="container">
        <div className="inputcontainer">
          <p className="label">학번</p>
          <input
            className="inputField"
            type="text"
            placeholder="학번을 입력해주세요"
          />
        </div>
      </div>

      <div className="container">
        <div className="inputcontainer">
          <p className="label">아이디</p>
          <input
            className="inputField"
            type="text"
            placeholder="4~15 이내로 입력해주세요"
          />
        </div>
      </div>

      <div className="container">
        <div className="inputcontainer">
          <p className="label">비밀번호</p>
          <input
            className="inputField"
            type="text"
            placeholder="최소 6자 이상(알파벳,숫자 필수)"
          />
        </div>
      </div>
      <div className="container">
        <div className="inputcontainer">
          <p className="label">비밀번호 확인</p>
          <input
            className="inputField"
            type="text"
            placeholder="위의 비밀번호와 동일하게 작성하여주세요"
          />
        </div>
      </div>

      <div className="container">
        <div className="inputcontainer">
          <p className="label">이메일</p>
          <input
            className="inputField"
            type="text"
            placeholder="abc123@gwakkili.co.kr"
          />
        </div>
      </div>

      <div className="container">
        <div className="inputcontainer">
          <p className="label">이름</p>
          <input className="inputField" type="text" placeholder="홍길동" />
        </div>
      </div>

      <div className="container">
        <div className="inputcontainer">
          <p className="label">닉네임</p>
          <input
            className="inputField"
            type="text"
            placeholder="4~15 이내로 입력해주세요"
          />
        </div>
      </div>

      <div className="container">
        <div className="inputcontainer">
          <p className="label">휴대폰</p>
          <input
            className="inputField"
            type="text"
            placeholder="010-xxxx-xxxx"
          />
        </div>
      </div>
      <div className="btndiv">
        <br />

        <Link to="/SelectSch">
          <button type="submit" className="Btn">
            회원가입
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
