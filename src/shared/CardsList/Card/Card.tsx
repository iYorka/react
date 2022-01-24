import React from 'react';
import styles from './card.module.css';
import {Menu} from "./Menu";

export function Card() {
  return (
    <li className={styles.card}>
      <div className={styles.textContent}>
        <div className={styles.metaData}>
          <div className={styles.userLink}>
            <img className={styles.avatar}
                 src="https://cdn.dribbble.com/users/3387644/avatars/small/d7630a33f2d7ad08fb1c9742fe131c30.png?1641385262"
                 alt="avatar"
            />
            <a href="user-url" className={styles.userName}>Same user name</a>
          </div>
          <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>
              Posted....
            </span>
            4 years ago...
          </span>
        </div>
        <h2 className={styles.title}>
          <a href="post-url" className={styles.postLink}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolor ea eius, eos exercitationem expedita.
          </a>
        </h2>
      </div>
      <div className={styles.preview}>
        <img className={styles.previewImg}
             src="https://cdn.dribbble.com/users/7738691/screenshots/15736034/media/5e136d44542c11d442b8f3956b6307d4.gif"
             alt="preview image"/>
      </div>
      <div className={styles.menu}>
        <button className={styles.menuButton}>
          <Menu/>
        </button>
      </div>
      <div className={styles.controls}>
        <div className={styles.karmaCounter}>
          <button className={styles.karmaUp}>
            <svg version="1.1" width="16" height="16" viewBox="0 0 16 16">
              <path fill="#444444" d="M3 9.4l5-5 5 5-1.4 1.4-3.6-3.6-3.6 3.6z"></path>
              <path fill="#444444"
                    d="M15 8c0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7 7 3.1 7 7zM16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8v0z"></path>
            </svg>
          </button>
          <span className={styles.karmaValue}>
            1488
          </span>
          <button className={styles.karmaDown}>
            <svg version="1.1" width="16" height="16" viewBox="0 0 16 16">
              <path fill="#444444" d="M3 9.4l5-5 5 5-1.4 1.4-3.6-3.6-3.6 3.6z"></path>
              <path fill="#444444"
                    d="M15 8c0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7 7 3.1 7 7zM16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8v0z"></path>
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
}
