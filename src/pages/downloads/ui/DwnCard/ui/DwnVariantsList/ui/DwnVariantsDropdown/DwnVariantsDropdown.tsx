// eslint-disable-next-line import/no-extraneous-dependencies
import { Menu } from '@mantine/core';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import classNames from 'classnames';
import styles from './DwnVariantsDropdown.module.scss';

interface DwnVariantsDropdownProps {
  selectedValue: Item;
  setSelectedValue: any;
  values: Item[];
}

interface Item {
  value: string;
  label: string;
}

const DwnVariantsDropdown = ({
  selectedValue,
  setSelectedValue,
  values,
}: DwnVariantsDropdownProps) => {
  const [opened, setOpened] = useState(false);

  const generateItems = () => {
    return values.map((item) => {
      if (selectedValue.value === item.value) {
        return (
          <Menu.Item data-selected key={item.value} onClick={() => setSelectedValue(item)}>
            {item.label}
          </Menu.Item>
        );
      }
      return (
        <Menu.Item key={item.value} onClick={() => setSelectedValue(item)}>
          {item.label}
        </Menu.Item>
      );
    });
  };

  return (
    <Menu
      opened={opened}
      onChange={setOpened}
      classNames={{
        item: styles.item,
        dropdown: styles.dropdown,
      }}
    >
      <Menu.Target>
        <button type="button" className={styles.button}>
          {selectedValue.label}
          <span
            className={classNames(styles.iconButton, {
              [styles.rotateIcon180]: opened,
              [styles.rotateIcon0]: !opened,
            })}
          >
            <ChevronDown />
          </span>
        </button>
      </Menu.Target>

      <Menu.Dropdown>{generateItems()}</Menu.Dropdown>
    </Menu>
  );
};

export default DwnVariantsDropdown;
