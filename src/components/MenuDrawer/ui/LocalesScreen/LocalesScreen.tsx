import { ArrowLeft, X } from 'lucide-react';
import LocaleSwitchPill from '@src/components/LocaleSwitchPill/LocaleSwitchPill';
import { useTranslation } from 'react-i18next';
import localesList from '@src/shared/config/i18n/localesList';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './LocalesScreen.module.scss';

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
        {localesList.map((el) => (
          <LocaleSwitchPill
            key={el.code}
            text={el.name}
            active={i18n.resolvedLanguage === el.code}
            onClick={() => {
              const newUrl = location.pathname.split('/');
              newUrl[1] = el.code;
              navigate(newUrl.join('/'), { replace: true });
              i18n.changeLanguage(el.code);
              goToMainScreen();
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LocalesScreen;
