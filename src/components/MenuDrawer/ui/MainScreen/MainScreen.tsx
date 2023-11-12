import { ChevronDown, Languages, X } from 'lucide-react';
import DrawerNavLink from '@src/components/MenuDrawer/ui/DrawerNavLink/DrawerNavLink';
import { useTranslation } from 'react-i18next';
import styles from './MainScreen.module.scss';

interface PT {
  closeDrawer: any;
  goToLocalesScreen: any;
}

const MainScreen = ({ closeDrawer, goToLocalesScreen }: PT) => {
  const { t } = useTranslation();
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <button type="button" className={styles.iconButton} onClick={closeDrawer}>
          <X />
        </button>
      </div>
      <div className={styles.list}>
        <DrawerNavLink text={t('navigation.support')} to="./support" />
        <DrawerNavLink text={t('navigation.about')} to="./about" />
      </div>
      <div className={styles.langSwitchButtonContainer}>
        <button type="button" className={styles.langSwitchButton} onClick={goToLocalesScreen}>
          <Languages />
          <ChevronDown />
        </button>
      </div>
    </div>
  );
};

export default MainScreen;
