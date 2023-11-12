import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './AffiliatedLogos.module.scss';
import { ReactComponent as WiredLogo } from './assets/wired.svg';
import { ReactComponent as TechRadarLogo } from './assets/tradar.svg';
import { ReactComponent as TheInsiderLogo } from './assets/insider.svg';
import { ReactComponent as MeduzaLogo } from './assets/meduza.svg';
import { ReactComponent as RoscomLogo } from './assets/roscom.svg';

const AffiliatedLogos = () => {
  const { t, i18n } = useTranslation('main-page');
  return (
    <div className={classNames(styles.root)}>
      <div className={styles.text}>{t('affiliatedLinks.theyWriteAboutAmneziaVPN')}</div>
      <div className={styles.logoContainerWrapper}>
        <div className={styles.logoContainer}>
          <Link
            className={styles.logoLink}
            to="https://www.wired.com/story/amnezia-vpn-russia-censorship/"
            reloadDocument
            aria-label="Go to the wired website"
          >
            <WiredLogo />
          </Link>
          <Link
            className={styles.logoLink}
            to="https://www.techradar.com/news/i-built-my-own-vpn-server-and-this-is-what-i-learned"
            reloadDocument
            aria-label="Go to techradar website"
          >
            <TechRadarLogo />
          </Link>
          {i18n.resolvedLanguage === 'ru' ? (
            <>
              <Link
                className={styles.logoLink}
                to="https://theins.ru/search?q=amnezia"
                reloadDocument
                aria-label="Go to the insider website"
              >
                <TheInsiderLogo />
              </Link>
              <Link
                className={styles.logoLink}
                to="https://meduza.io/feature/2022/07/29/kakie-vpn-samye-nadezhnye-kak-ponyat-chto-servis-sotrudnichaet-so-spetssluzhbami-mogut-li-rossiyu-voobsche-otklyuchit-ot-normalnogo-interneta"
                reloadDocument
                aria-label="Go to meduza website"
              >
                <MeduzaLogo />
              </Link>
              <Link
                className={styles.logoLink}
                to="https://roskomsvoboda.org/search/?query=amnezia"
                reloadDocument
                aria-label="Go to roskomsvoboda website"
              >
                <RoscomLogo />
              </Link>
            </>
          ) : undefined}
        </div>
      </div>
    </div>
  );
};

export default AffiliatedLogos;
