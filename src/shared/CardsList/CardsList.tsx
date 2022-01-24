import React from 'react';
import { Card } from './Card';
import styles from './cardslist.module.css';

export function CardsList() {
  return (
    <ul className={styles.cardsList}>
      <li><Card/></li>
      {/*<li><Card/></li>*/}
    </ul>
  );
}
