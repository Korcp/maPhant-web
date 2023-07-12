import { Link } from "react-router-dom";
import "./Signup.css";
import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const emailRegEx = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+(ac\.kr)$/;
  const emailRegEx2 = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+(edu)$/;

  const onEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const emailCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    const input = e.target as HTMLInputElement;

    if (!emailValue) {
      setEmailError(true);
      input.setCustomValidity("이메일을 입력하여주세요");
    } else if (!emailRegEx.test(emailValue) && !emailRegEx2.test(emailValue)) {
      setEmailError(true);
      input.setCustomValidity("유효한 이메일을 입력하여주세요");
    } else {
      setEmailError(false);
      input.setCustomValidity("");
      setEmail(emailValue);
    }

    input.reportValidity();
  };

  return (
    <div className="SignupMain">
      <p className="SignupTitle">회원가입</p>

      <div className="container">
        <div className="inputcontainer">
          <p className="label">이메일</p>
          <input
            id="email"
            className="inputField"
            type="text"
            placeholder="abc123@gwakkili.ac.kr"
            value={email}
            onChange={onEmail}
            onBlur={emailCheck}
            required
          />
        </div>
      </div>

      <div className="container">
        <div className="inputcontainer">
          <p className="label">비밀번호</p>
          <input
            id="password"
            className="inputField"
            type="password"
            placeholder="[영문 대, 소문자 1개 이상 + 숫자 1개 이상 + 특수문자 1개 이상]"
          />
        </div>
      </div>
      <div className="container">
        <div className="inputcontainer">
          <p className="label">비밀번호 확인</p>
          <input
            id="passwordChk"
            className="inputField"
            type="password"
            placeholder="위의 비밀번호와 동일하게 작성하세요"
          />
        </div>
      </div>

      <div className="container">
        <div className="inputcontainer">
          <p className="label">닉네임</p>
          <input
            id="nickname"
            className="inputField"
            type="text"
            placeholder="[3~20자의 영문(대,소문자), 한글, 숫자]"
          />
        </div>
      </div>

      <div className="container">
        <div className="inputcontainer">
          <p className="label">학교</p>
          <input
            id="universityName"
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
            id="sNo"
            className="inputField"
            type="text"
            placeholder="학번을 입력해주세요"
          />
        </div>
      </div>

      <div className="btndiv">
        <br />

        <button type="submit" className="Btn">
          회원가입
        </button>
      </div>
    </div>
  );
}

export default Signup;
