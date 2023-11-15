import { Menu } from '@mantine/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './ProductsDropdownItem.module.scss';

interface ProductsDropDownItemProps {
  to: string;
  text: string;
  subtext: string;
  end?: boolean;
}

const ProductsDropDownItem = ({ text, subtext, to, end = false }: ProductsDropDownItemProps) => {
  return (
    <Menu.Item>
      <NavLink to={to} end={end}>
        {({ isActive }) => (
          <div
            className={classNames(
              styles.item
              // isActive ? styles.active : ''
            )}
          >
            <div className={styles.text}>{text}</div>
            <div className={styles.subtext}>{subtext}</div>
          </div>
        )}
      </NavLink>
    </Menu.Item>
  );
};

export default ProductsDropDownItem;
