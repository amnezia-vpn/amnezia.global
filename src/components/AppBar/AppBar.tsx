import { NavLink } from 'react-router-dom';
import AppBarLink from '@src/components/AppBar/ui/AppBarLink/AppBarLink';
import MenuButton from '@src/components/MenuButton/MenuButton';
import LocaleSwitchModal from '@src/components/localeSwitchModal/LocaleSwitchModal';
import { useTranslation } from 'react-i18next';
import ProductsDropdown from '@src/components/AppBar/ui/ProductsDropdown/ProductsDropdown';
import ProductsDropDownItem from '@src/components/AppBar/ui/ProductsDropdown/ui/ProductsDropdownItem/ProductsDropDownItem';
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
          {/* <img height={25} width={94} src="/img/logos/logo-text-colorfull@2x.png" alt="" /> */}
          <img height={25} width={94} src="/img/logos/logo-text.svg" alt="" />
        </NavLink>
      </div>

      <nav className={styles.nav}>
        <ProductsDropdown>
          <ProductsDropDownItem
            to="."
            text={t('navigation.amneziaVpn.text')}
            subtext={t('navigation.amneziaVpn.subtext')}
            end
          />
          <ProductsDropDownItem
            to="./reverse-vpn"
            text={t('navigation.reverseVpn.text')}
            subtext={t('navigation.reverseVpn.subtext')}
          />
          <ProductsDropDownItem
            to="./hosting"
            text={t('navigation.hosting.text')}
            subtext={t('navigation.hosting.subtext')}
          />
          {/* <AppBarLink to="./hosting" text={t('navigation.hosting')} /> */}
          {/* <AppBarLink to="./reverse-vpn" text={t('navigation.reverseVpn')} /> */}
          {/* <AppBarLink to="." text='Amnezia VPN' end /> */}
        </ProductsDropdown>
        <AppBarLink to="./support" text={t('navigation.support')} />
        <AppBarLink to="./about" text={t('navigation.about')} />
      </nav>

      {/* <ProductsDropdown /> */}
      <LocaleSwitchModal />
      <MenuButton onClick={openDrawerAction} />
    </div>
  );
};

export default AppBar;
