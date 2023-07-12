import IconImg from "../img/Icon.png";
import classes from "./MainHeader.module.css";
import DarkToggle from "./DarkToggle";
import { MdSearch } from "react-icons/md";

function MainHeader({ username }: any) {
  return (
    <header className={classes.header}>
      <div className={classes.content}>
        <div>
          <img src={IconImg} alt="" />
        </div>

        <div style={{ color: "white" }}>소프트웨어 학과</div>

        <nav>
          <ul className={classes.boardList}>
            <li className={classes.boardLink}>
              <a href="">자유</a>
            </li>
            <li className={classes.boardLink}>
              <a href="">지식</a>
            </li>
            <li className={classes.boardLink}>
              <a href="">QnA</a>
            </li>
            <li className={classes.boardLink}>
              <a href="">홍보</a>
            </li>
            <li className={classes.boardLink}>
              <a href="">취업진로</a>
            </li>
            <li className={classes.boardLink}>
              <a href="">취미</a>
            </li>
          </ul>
        </nav>

        <span className={classes.search}>
          <button type="button" className={classes.searchIcon}>
            <MdSearch size={18} />
          </button>
          <input
            type="text"
            className={classes.searchInput}
            placeholder="검색"
          />
        </span>

        <DarkToggle />

        <button className={classes.myPage}>{username}</button>
      </div>
    </header>
  );
}

export default MainHeader;
