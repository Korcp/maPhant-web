import React from "react";
import MainHeader from "./Header/MainHeader";
import Post from "./Post/Post";
import styles from "./MainApp.module.css";

function MainApp() {
  return (
    <div className={styles.layout}>
      <MainHeader username="사용자" />

      <main className={styles.mainLayout}>
        <div className={styles.flexbox1}>광고창</div>
        <div className={styles.flexbox2}>
          <div className={styles.hot}>
            <div className={styles.hotPost}>
              <p>핫 게시판</p>
              <p>제목</p>
              <p>제목</p>
              <p>제목</p>
              <p>제목</p>
            </div>
          </div>

          <div className={styles.box1}>
            <div className={styles.post}>
              <h3 className={styles.title}>자유게시판</h3>
              <p> 집가고싶다 </p>
              <p> 로또 1등 당첨 </p>
            </div>

            <div className={styles.post}>
              <h3 className={styles.title}>지식게시판</h3>
              <p> flex 쓰는법 </p>
            </div>

            <div className={styles.post}>
              <h3 className={styles.title}>QnA</h3>
              <p> fetch로 어떻게 데이터 받아오나요?? </p>
            </div>
          </div>

          <div className={styles.box2}>
            <div className={styles.post}>
              <h3 className={styles.title}>홍보게시판</h3>
              <p> 프론트엔드좀 도와주실분 구합니다 </p>
            </div>

            <div className={styles.post}>
              <h3 className={styles.title}>취업 | 진로</h3>
              <p> 네카라쿠배 취업 </p>
            </div>

            <div className={styles.post}>
              <h3 className={styles.title}>취미게시판</h3>
              <p> 오타쿠 </p>
            </div>
          </div>
        </div>
        <div className={styles.flexbox3}>광고창</div>
      </main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}

export default MainApp;
