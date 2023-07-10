import { useState } from "react";
import IconImg from "./img/Icon.png";
import { text } from "stream/consumers";
import { Link } from "react-router-dom";
import "./SelectSch.css";

function SelectSch() {
  const AdmissionYearDropdown = () => {
    const startYear = 1954;
    const NowYear = new Date().getFullYear();
    const ListYears = Array.from(
      { length: NowYear - startYear + 1 },
      (_, index) => startYear + index
    );

    return (
      <div className="outer">
        <nav className="margin">
          <div className="imgbox">
            <img src={IconImg} alt="" />
            <label>
              <b>학교 선택</b>
            </label>
          </div>

          <div className="Title">
            <label>입학년도</label>
            <br />
            <select>
              {ListYears.map((year) => (
                <option key={year} value={year} placeholder="입학년도">
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="School">
            <label>학교</label>
            <br />
            <select>
              <option value="" placeholder="입학학교"></option>
            </select>
          </div>

          <div className="Major">
            <label>학과</label>
            <br />
            <select>
              <option value=""></option>
            </select>
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
