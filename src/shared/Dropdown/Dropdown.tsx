import React, {useEffect, useState} from 'react';
import styles from './dropdown.module.css';
import {Menu} from "../CardsList/Card/Menu";

interface IDrowdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {}

export function Dropdown({button, children, isOpen, onOpen = NOOP, onClose = NOOP}: IDrowdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
  useEffect(() => {
    setIsDropdownOpen(isOpen)
  },[isOpen])
  useEffect(() => {
    isDropdownOpen ? onOpen() : onClose();
  }, [isDropdownOpen])
  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  }
  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>
        {button}
      </div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <div onClick={() => setIsDropdownOpen(false)} className={styles.list}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
