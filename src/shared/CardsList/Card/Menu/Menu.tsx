import React from 'react';
import styles from './menu.module.css';
import {MenuIcon} from "../../../Icons";
import {Dropdown} from "../../../Dropdown";
import {Text, EColor} from '../../../../shared/Text';


export function Menu() {
  return (
    <div className={styles.menu}>


      <Dropdown
        button={
          <button className={styles.menuButton}>
            <MenuIcon/>
          </button>
        }
      >
        <div className={styles.dropdown}>
        Menu
        <button className={styles.closeButton}>
          
          <Text size={20} color={EColor.orange}>
            My text
          </Text>
        </button>
        </div>
      </Dropdown>
    </div>
  )
    ;
}
