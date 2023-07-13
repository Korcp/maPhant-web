import React from "react";
import PostList from "./MainPost/PostList";
import MainHeaderSample from "./Header/MainHeader";

import styles from "./MainApp.module.css";

function MainApp() {
  return (
    <div className={styles.layout}>
      {/* <MainHeader username="사용자" /> */}
      <MainHeaderSample />

      <main className={styles.mainLayout}>
        <div className={styles.emptybox} />
        <div className={styles.flexbox1}>광고창</div>
        <div className={styles.flexbox2}>
          <div className={styles.hot}>
            <div className={styles.hotPost}>
              <p>HOT 키워드</p>
              <p>#김치</p>
              <p>#찌개</p>
              <p>#제육</p>
              <p>#볶음</p>
            </div>
          </div>

          <div className={styles.box1}>
            <PostList />

            <PostList />

            <PostList />
          </div>

          <div className={styles.box2}>
            <PostList />

            <PostList />

            <PostList />
          </div>
        </div>
        <div className={styles.flexbox3}>광고창</div>
        <div className={styles.emptybox} />
      </main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}

export default MainApp;
