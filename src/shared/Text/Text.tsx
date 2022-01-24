import React from 'react';
import styles from './text.module.css';
import classNames from 'classnames';


type TSizes = 10 | 12 | 14 | 16 | 20 | 28;

export enum EColor {
  black = "black",
  orange = "orange",
  green = "green",
  white = "white",
  grayF4 = "grayF4",
  grayF3 = "grayF3",
  grayD9 = "grayD9",
  grayC4 = "grayC4",
  gray99 = "gray99",
  gray66 = "gray66"
}

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  children?: React.ReactNode;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColor;
  bold?: boolean;
}

export function Text(props: ITextProps) {
  const {
    As = 'span',
    children,
    size,
    mobileSize,
    desktopSize,
    tabletSize,
    bold = false,
    color = EColor.black
  } = props;
  const classes = classNames(
    styles[`s${size}`],
    {[styles[`m${mobileSize}`]]: mobileSize},
    {[styles[`d${desktopSize}`]]: desktopSize},
    {[styles[`t${tabletSize}`]]: tabletSize},
    styles[color],
    {[styles.bold] : bold},
  );
  return (
    <As className={classes}>
      {children}
    </As>
  );
}
