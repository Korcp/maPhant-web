import "./Signup.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//비밀번호 확인 , // 전화번호
function Signup() {
  const [universe, setUniverse] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [Repassword, setRepassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [universecheck, setUniversecheck] = useState(false);
  const [idcheck, setIdcheck] = useState(false);
  const [passwordcheck, setPasswordCheck] = useState(false);
  const [Repasswordcheck, setRePasswordCheck] = useState(false);
  const [emailcheck, setEmailCheck] = useState(false);
  const [namecheck, setNameCheck] = useState(false);
  const [nicknamecheck, setNickNameCheck] = useState(false);
  const [phoneNocheck, setPhoneNocheck] = useState(false);
  const [equal, setEqual] = useState(false);

  const universenullcheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUniverse(e.target.value);
    setUniversecheck(false);
  };

  const Idnullcheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
    setIdcheck(false);
  };
  const Passwordcheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordCheck(false);
  };
  const RePasswordCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepassword(e.target.value);
    setRePasswordCheck(false);
  };
  const emailCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailCheck(false);
  };

  const nameCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setNameCheck(false);
  };
  const nicknameCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    setNickNameCheck(false);
  };
  const phoneNoCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNo(e.target.value);
    setPhoneNocheck(false);
  };

  const navigate = useNavigate();

  const Alert = () => {
    if (!id) {
      setIdcheck(true);
    }
    if (!password) {
      setPasswordCheck(true);
    }
    if (!Repassword) {
      setRePasswordCheck(true);
    }
    if (!email) {
      setEmailCheck(true);
    }
    if (!name) {
      setNameCheck(true);
    }
    if (!nickname) {
      setNickNameCheck(true);
    }
    if (!phoneNo) {
      setPhoneNocheck(true);
    }
    if (password !== Repassword) {
      setEqual(true);
    } else {
      setEqual(false);
    }

    const noneValueCheck =
      id || password || Repassword || email || name || nickname || phoneNo;

    if (
      idcheck === false &&
      passwordcheck === false &&
      Repasswordcheck === false &&
      emailcheck === false &&
      namecheck === false &&
      nicknamecheck === false &&
      phoneNocheck === false &&
      equal === false &&
      noneValueCheck &&
      password === Repassword
    ) {
      navigate("/SelectSch");
    }
  };

  return (
    <div className="outer">
      <nav className="Signpadding">
        <div className="Universe">
          <label>학교</label>
        </div>
        <div className="Universetextbox">
          <input
            id="Universe"
            type="text"
            placeholder="학교를 입력해주세요"
            value={universe}
            onChange={universenullcheck}
          />
        </div>
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
          <span className="none-id">
            아이디를 입력해주세요
            <br />
            <br />
          </span>
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
            onChange={Passwordcheck}
          />
          <br />
          {passwordcheck && (
            <span className="PW-null">
              비밀번호를 입력해주세요
              <br />
              <br />
            </span>
          )}

          <label>비밀번호 확인</label>
          <div className="PWcheck">
            <input
              type="password"
              id="paswordCheck"
              placeholder="위의 비밀번호와 동일하게 작성하여주세요"
              value={Repassword}
              onChange={RePasswordCheck}
            />
          </div>
        </div>
        {Repasswordcheck && (
          <span className="REPW-null">
            비밀번호 확인을 입력해주세요
            <br />
            <br />
          </span>
        )}

        {equal && (
          <span className="equal-check">
            비밀번호를 일치시켜주세요
            <br />
            <br />
          </span>
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
          <span className="email-null">
            이메일을 입력해주세요
            <br />
            <br />
          </span>
        )}
        <div className="Name">
          <label>이름</label>
        </div>
        <div className="Nametextbox">
          <input
            type="text"
            id="name"
            placeholder=" 홍길동"
            value={name}
            onChange={nameCheck}
          />
          <br />
        </div>
        {namecheck && (
          <span className="name-null">
            이름을 입력해주세요
            <br />
            <br />
          </span>
        )}
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
          <span className="nickname-null">
            <br />
            닉네임을 입력하여주세요
          </span>
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
          <span className="phoneNo-null">
            휴대폰을 입력하여주세요
            <br />
            <br />
          </span>
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
