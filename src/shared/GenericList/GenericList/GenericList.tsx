import React from 'react';
import styles from './genericlist.module.css';

interface IItem {
  id: string;
  text: string;
  onClick?: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;

}

interface IGenericListProps {
  list: IItem[];
}

const noop = () => {}

export function GenericList({list}: IGenericListProps) {
  return (
    <>
      {list.map(({As = "div", text, className, id, onClick = noop, href}) => (
      <As
        className = {className}
        key={id}
        onClick = {() => onClick(id)}
        href = {href}
      >
        {text}
        </As>
      ))}
    </>
  );
}