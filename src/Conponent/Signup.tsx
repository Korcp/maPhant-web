import "./Signup.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//비밀번호 확인 , // 전화번호
function Signup() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordcheck, setPasswordCheck] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [passwordMatch1, setPasswordMatch1] = useState(false);
  const [idcheck, setIdcheck] = useState(false);
  const [emailcheck, setEmailCheck] = useState(false);
  const [namecheck, setNameCheck] = useState(false);
  const [nicknamecheck, setNickNameCheck] = useState(false);
  const [phoneNocheck, setPhoneNocheck] = useState(false);

  const Idnullcheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const PasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const PasswordCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(e.target.value);
  };
  const emailCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const nicknameCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  const phoneNoCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNo(e.target.value);
  };

  const navigate = useNavigate();

  const Alert = () => {
    if (!id) {
      setIdcheck(true);
    }
    if (password.length < 1 || passwordcheck.length < 1) {
      setPasswordMatch1(true);
    }
    if (password == passwordcheck) {
      setPasswordMatch(true);
    }
    if (!email) {
      setEmailCheck(true);
    }
    if (!nickname) {
      setNickNameCheck(true);
    }
    if (!phoneNo) {
      setPhoneNocheck(true);
    }
    if (passwordMatch == true && passwordMatch1 == true && idcheck == true) {
      navigate("/");
    }
  };
  return (
    <div className="outer">
      <nav className="Signpadding">
        <div className="ID">
          <label>아이디</label>
        </div>
        <div className="IDtextbox">
          <input
            id="id"
            type="text"
            placeholder="4~15 이내로 입력해주세요"
            value={id}
            onChange={Idnullcheck}
          />
        </div>
        {idcheck && (
          <a className="none-id">
            아이디를 입력해주세요
            <br />
            <br />
          </a>
        )}
        <div className="PWN">
          <label>비밀번호</label>
        </div>
        <div className="PWtextbox">
          <input
            type="password"
            id="password"
            placeholder=" 최소 6자 이상(알파벳,숫자 필수)"
            value={password}
            onChange={PasswordChange}
          />

          <br />

          <label>비밀번호 확인</label>
          <div className="PWcheck">
            <input
              type="password"
              id="paswordCheck"
              placeholder="위의 비밀번호와 동일하게 작성하여주세요"
              value={passwordcheck}
              onChange={PasswordCheckChange}
            />
          </div>
        </div>
        {passwordMatch1 && (
          <a className="none-Message">
            비밀번호와 비밀번호 확인을 입력해주세요
            <br />
            <br />
          </a>
        )}
        {passwordMatch && (
          <a className="error-message">
            비밀번호가 일치하지않습니다
            <br />
            <br />
          </a>
        )}

        <div className="Email">
          <label>이메일</label>
        </div>
        <div className="Emailtextbox">
          <input
            type="email"
            id="email"
            placeholder=" abc123@gwakkii.co.kr"
            value={email}
            onChange={emailCheck}
          />
          <br />
        </div>
        {emailcheck && (
          <a className="email-null">
            이메일을 입력해주세요
            <br />
            <br />
          </a>
        )}
        <div className="Name">
          <label>실명</label>
        </div>
        <div className="Nametextbox">
          <input type="text" id="name" placeholder=" 홍길동" />
          <br />
        </div>
        <div className="Nickname">
          <label>닉네임</label>
        </div>
        <div className="Nicknametextbox">
          <input
            id="input"
            type="text"
            placeholder="4~15 이내로 입력해주세요"
            value={nickname}
            onChange={nicknameCheck}
          />
        </div>
        {nicknamecheck && (
          <a className="nickname-null">
            <br />
            닉네임을 입력하여주세요
          </a>
        )}
        <br />
        <br />

        <div className="PhoneNo">
          <label>휴대폰</label>
        </div>
        <div className="PhoneNotextbox">
          <input
            type="text"
            id="number"
            placeholder="휴대폰번호를 입력하여주세요"
            value={phoneNo}
            onChange={phoneNoCheck}
          />
        </div>
        <br />
        {phoneNocheck && (
          <a className="phoneNo-null">
            휴대폰을 입력하여주세요
            <br />
            <br />
          </a>
        )}
        <br />
        <button type="submit" onClick={Alert}>
          회원가입
        </button>
      </nav>
    </div>
  );
}

export default Signup;
