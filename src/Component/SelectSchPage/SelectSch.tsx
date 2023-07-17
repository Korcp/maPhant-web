/*eslint-disable*/
import IconImg from "./img/Icon.png";
import { Link } from "react-router-dom";
import "./SelectSch.css";
import Dep from "./pages/Dep.js";

function SelectSch() {
  const AdmissionYearDropdown = () => {
    return (
      <div className="outer">
        <nav className="margin">
          <div className="imgbox">
            <img src={ IconImg } alt="" />
            <label>
              <b>학과 선택</b>
            </label>
          </div>

          <div className="Title">
            <label>전공계열</label>
            <br />
            <Dep />
          </div>

          <div className="Major">
            <label>학과</label>
            <br />
            <input
              type="text"
              id="majorId"
              placeholder="학과를 입력해주세요."
            />
          </div>
          <div className="next">
            <Link to="/">
              <button type="submit" className="SelectBtn">
                완료
              </button>
            </Link>
          </div>
        </nav>
      </div>
    );
  };
  return <AdmissionYearDropdown />;
}

export default SelectSch;
