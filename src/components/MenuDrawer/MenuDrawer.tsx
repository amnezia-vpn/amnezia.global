import { Drawer } from '@mantine/core';
import { useEffect, useState } from 'react';
import MainScreen from '@src/components/MenuDrawer/ui/MainScreen/MainScreen';
import LocalesScreen from '@src/components/MenuDrawer/ui/LocalesScreen/LocalesScreen';
import styles from './MenuDrawer.module.scss';

interface PT {
  drawerOpened: any;
  closeDrawer: any;
}

const MenuDrawer = ({ drawerOpened, closeDrawer }: PT) => {
  // main | locales
  const [currenScreen, setCurrentScreen] = useState('main');

  const goToMainScreen = () => {
    setCurrentScreen('main');
  };

  const goToLocalesScreen = () => {
    setCurrentScreen('locales');
  };

  useEffect(() => {
    if (drawerOpened) setCurrentScreen('main');
  }, [drawerOpened]);

  return (
    <Drawer
      size={260}
      position="right"
      withCloseButton={false}
      classNames={{
        root: styles.root,
        inner: styles.inner,
        content: styles.content,
        overlay: styles.overlay,
        body: styles.body,
      }}
      opened={drawerOpened}
      onClose={closeDrawer}
    >
      {currenScreen === 'main' ? (
        <MainScreen closeDrawer={closeDrawer} goToLocalesScreen={goToLocalesScreen} />
      ) : (
        <LocalesScreen closeDrawer={closeDrawer} goToMainScreen={goToMainScreen} />
      )}
    </Drawer>
  );
};

export default MenuDrawer;
