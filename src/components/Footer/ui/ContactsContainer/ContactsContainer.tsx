import classNames from 'classnames';
import TextLink from '@src/shared/ui/TextLink/TextLink';
import { useTranslation } from 'react-i18next';
import styles from './ContactsContainer.module.scss';

const ContactsContainer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.root}>
      <div className={styles.label}>{t('footer.contacts')}</div>
      <div className={styles.linksContainer}>
        <TextLink
          text="Telegram"
          to={
            i18n.resolvedLanguage === 'ru'
              ? 'https://t.me/amnezia_vpn'
              : 'https://t.me/amnezia_vpn_en'
          }
          openInNewTab
          variant="light"
          className={styles.link}
        />
        <TextLink
          text="Signal"
          to="https://signal.group/#CjQKIB2gUf8QH_IXnOJMGQWMDjYz9cNfmRQipGWLFiIgc4MwEhAKBONrSiWHvoUFbbD0xwdh"
          openInNewTab
          variant="light"
          className={styles.link}
        />
        <TextLink
          text="Reddit"
          to="https://www.reddit.com/r/AmneziaVPN/"
          openInNewTab
          variant="light"
          className={styles.link}
        />
        <TextLink
          text="support@amnezia.org"
          to="mailto:support@amnezia.org"
          variant="light"
          className={styles.link}
        />
        <TextLink
          text={t('navigation.about')}
          to="./about"
          variant="light"
          className={styles.link}
        />
      </div>
    </div>
  );
};

export default ContactsContainer;
