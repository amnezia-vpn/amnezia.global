import { Drawer } from '@mantine/core';
import { useEffect, useState } from 'react';
import MainScreen from '@src/components/MenuDrawer/ui/MainScreen/MainScreen';
import LocalesScreen from '@src/components/MenuDrawer/ui/LocalesScreen/LocalesScreen';
import ProductsScreen from '@src/components/MenuDrawer/ui/ProductsScreen/ProductsScreen';
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

  const goToProductsScreen = () => {
    setCurrentScreen('products');
  };

  const goToLocalesScreen = () => {
    setCurrentScreen('locales');
  };

  const switchScreen = () => {
    if (currenScreen === 'main')
      return (
        <MainScreen
          closeDrawer={closeDrawer}
          goToLocalesScreen={goToLocalesScreen}
          goToProductsScreen={goToProductsScreen}
        />
      );
    if (currenScreen === 'locales')
      return <LocalesScreen closeDrawer={closeDrawer} goToMainScreen={goToMainScreen} />;
    if (currenScreen === 'products')
      return <ProductsScreen closeDrawer={closeDrawer} goToMainScreen={goToMainScreen} />;
    return <div />;
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
      {switchScreen()}
      {/* {currenScreen === 'products' || ( */}
      {/*  <ProductsScreen closeDrawer={closeDrawer} goToMainScreen={goToMainScreen} /> */}
      {/* )} */}
    </Drawer>
  );
};

export default MenuDrawer;
