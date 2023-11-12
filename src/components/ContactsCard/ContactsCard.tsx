import Card from '@src/shared/ui/Card/Card';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './ContactsCard.module.scss';
import { ReactComponent as TelegramLogo } from './assets/telegram.svg';
import { ReactComponent as SignalLogo } from './assets/signal.svg';

const ContactsCard = () => {
  const { i18n, t } = useTranslation('support-page');
  return (
    <Card bg="plainGray" className={styles.root}>
      <div className={styles.label}>{t('contactsCardLabel')}</div>
      <div className={styles.container}>
        <Link
          target="_blank"
          to={
            i18n.resolvedLanguage === 'ru'
              ? 'https://t.me/amnezia_vpn'
              : 'https://t.me/amnezia_vpn_en'
          }
          className={styles.contactBadge}
        >
          <TelegramLogo />
        </Link>
        <Link
          target="_blank"
          to="https://signal.group/#CjQKIB2gUf8QH_IXnOJMGQWMDjYz9cNfmRQipGWLFiIgc4MwEhAKBONrSiWHvoUFbbD0xwdh"
          className={styles.contactBadge}
        >
          <SignalLogo />
        </Link>
      </div>
    </Card>
  );
};

export default ContactsCard;
