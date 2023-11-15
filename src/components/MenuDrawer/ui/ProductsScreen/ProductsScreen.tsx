import { ArrowLeft, X } from 'lucide-react';
import LocaleSwitchPill from '@src/components/LocaleSwitchPill/LocaleSwitchPill';
import { useTranslation } from 'react-i18next';
import localesList from '@src/shared/config/i18n/localesList';
import { useLocation, useNavigate } from 'react-router-dom';
import DrawerProductLink from '@src/components/MenuDrawer/ui/DrawerProductLink/DrawerProductLink';
import styles from './ProductsScreen.module.scss';

interface PT {
  closeDrawer: any;
  goToMainScreen: any;
}

const LocalesScreen = ({ closeDrawer, goToMainScreen }: PT) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <button type="button" className={styles.iconButton} onClick={goToMainScreen}>
          <ArrowLeft />
        </button>
        <button type="button" className={styles.iconButton} onClick={closeDrawer}>
          <X />
        </button>
      </div>
      <div className={styles.list}>
        <DrawerProductLink
          to="."
          text={t('navigation.amneziaVpn.text')}
          subtext={t('navigation.amneziaVpn.subtext')}
          end
        />
        <DrawerProductLink
          to="./reverse-vpn"
          text={t('navigation.reverseVpn.text')}
          subtext={t('navigation.reverseVpn.subtext')}
        />
        <DrawerProductLink
          to="./hosting"
          text={t('navigation.hosting.text')}
          subtext={t('navigation.hosting.subtext')}
        />
      </div>
    </div>
  );
};

export default LocalesScreen;
