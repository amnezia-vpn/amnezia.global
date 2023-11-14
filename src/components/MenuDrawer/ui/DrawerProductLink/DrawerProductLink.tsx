import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import React from 'react';
import styles from './DrawerProductLink.module.scss';

interface DrawerProductLinkProps {
  to: string;
  text: string;
  subtext: string;
  end?: boolean;
}

const DrawerProductLink = ({ to, text, subtext, end }: DrawerProductLinkProps) => {
  return (
    <NavLink to={to} end={end}>
      {({ isActive }) => (
        <div className={classNames(styles.item, isActive ? styles.active : '')}>
          <div className={styles.text}>{text}</div>
          <div className={styles.subtext}>{subtext}</div>
        </div>
      )}
    </NavLink>
  );
};

export default DrawerProductLink;
