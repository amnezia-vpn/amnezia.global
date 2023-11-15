// eslint-disable-next-line import/no-extraneous-dependencies
import { Menu } from '@mantine/core';
import { ChevronDown } from 'lucide-react';
import React, { ReactNode, useState } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import styles from './ProductsDropdown.module.scss';

interface DwnVariantsDropdownProps {
  children: ReactNode;
}

const ProductsDropdown = ({ children }: DwnVariantsDropdownProps) => {
  const { t } = useTranslation();

  const [opened, setOpened] = useState(false);

  // const generateItems = () => {
  //   return values.map((item) => {
  //     if (selectedValue.value === item.value) {
  //       return (
  //         <Menu.Item data-selected key={item.value} onClick={() => setSelectedValue(item)}>
  //           {item.label}
  //         </Menu.Item>
  //       );
  //     }
  //     return (
  //       <Menu.Item key={item.value} onClick={() => setSelectedValue(item)}>
  //         {item.label}
  //       </Menu.Item>
  //     );
  //   });
  // };

  return (
    <Menu
      width={340}
      opened={opened}
      onChange={setOpened}
      classNames={{
        item: styles.item,
        dropdown: styles.dropdown,
      }}
    >
      <Menu.Target>
        <div
          className={classNames(styles.button, {
            [styles.buttonActive]: opened,
          })}
        >
          {t('navigation.products')}
          <span
            className={classNames(styles.iconButton, {
              [styles.rotateIcon180]: opened,
              [styles.rotateIcon0]: !opened,
            })}
          >
            <ChevronDown size={18} strokeWidth={2.6} />
          </span>
        </div>
      </Menu.Target>

      <Menu.Dropdown>
        {
          children
          // React.Children.map(children, child => {
          //   // if (!React.isValidElement(child)) {
          //     return (
          //       <Menu.Item>
          //         {child}
          //       </Menu.Item>
          //     )
          //   // }
          //   return undefined
          // })
        }
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProductsDropdown;
