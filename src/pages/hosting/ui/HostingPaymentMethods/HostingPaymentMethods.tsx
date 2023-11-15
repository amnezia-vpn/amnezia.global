import { useTranslation } from 'react-i18next';
import styles from './HostingPaymentMethods.module.scss';
import { ReactComponent as CryptoIcon } from './assets/crypto.svg';
import { ReactComponent as McIcon } from './assets/mc.svg';
import { ReactComponent as VisaIcon } from './assets/visa.svg';
import { ReactComponent as YoumoneyIcon } from './assets/youmoney.svg';
import { ReactComponent as QiwiIcon } from './assets/qiwi.svg';
import { ReactComponent as MirIcon } from './assets/mir.svg';

const HostingPaymentMethods = () => {
  const { t } = useTranslation('hosting-page');
  return (
    <div className={styles.root}>
      <h1 className={styles.header}>{t('paymentMethods')}</h1>
      <div className={styles.list}>
        <CryptoIcon />
        <McIcon />
        <VisaIcon />
        <YoumoneyIcon />
        <QiwiIcon />
        <MirIcon />
      </div>
    </div>
  );
};

export default HostingPaymentMethods;
