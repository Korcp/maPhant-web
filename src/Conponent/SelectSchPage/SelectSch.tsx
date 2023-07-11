import IconImg from "./img/Icon.png";
import { Link } from "react-router-dom";
import "./SelectSch.css";

function SelectSch() {
  const AdmissionYearDropdown = () => {
    const Listmajor = [
      "인문계열",
      "자연계열",
      "사회계열",
      "인문계열",
      "예체능계열",
      "교육계열",
      "공학계열",
    ];

    return (
      <div className="outer">
        <nav className="margin">
          <div className="imgbox">
            <img src={IconImg} alt="" />
            <label>
              <b>학과 선택</b>
            </label>
          </div>

          <div className="Title">
            <label>전공계열</label>
            <br />
            <select>
              <option value="" disabled selected>
                학과선택
              </option>
              {Listmajor.map((major) => (
                <option placeholder="전공계열을 선택하여 주시기바랍니다.">
                  {major}
                </option>
              ))}
            </select>
          </div>

          <div className="Major">
            <label>학과</label>
            <br />
            <input
              type="text"
              id="majorId"
              placeholder="학과를 입력하여주세요"
            />
          </div>
          <div className="next">
            <Link to="/">
              <button type="submit">완료</button>
            </Link>
          </div>
        </nav>
      </div>
    );
  };
  return <AdmissionYearDropdown />;
}

export default SelectSch;
