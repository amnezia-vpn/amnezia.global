import { NavLink } from 'react-router-dom';
import AppBarLink from '@src/components/AppBar/ui/AppBarLink/AppBarLink';
import MenuButton from '@src/components/MenuButton/MenuButton';
import LocaleSwitchModal from '@src/components/localeSwitchModal/LocaleSwitchModal';
import { useTranslation } from 'react-i18next';
import styles from './AppBar.module.scss';

interface PT {
  openDrawerAction: any;
}

const AppBar = ({ openDrawerAction }: PT) => {
  const { t } = useTranslation();

  return (
    <div className={styles.appBar}>
      <div className={styles.logoLinkWrapper}>
        <NavLink to=".">
          <img
            height={25}
            width={94}
            src="/img/logos/logo-text-colorfull@2x.png"
            alt=""
          />
        </NavLink>
      </div>

      <nav className={styles.nav}>
        <AppBarLink to="./support" text={t('navigation.support')} />
        <AppBarLink to="./about" text={t('navigation.about')} />
      </nav>

      {/* <DwnVariantsDropdown /> */}
      <LocaleSwitchModal />
      <MenuButton onClick={openDrawerAction} />
    </div>
  );
};

export default AppBar;
