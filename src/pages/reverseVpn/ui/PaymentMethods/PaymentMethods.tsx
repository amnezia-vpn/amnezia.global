import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './PaymentMethods.module.scss';
import { ReactComponent as PaymentLogos } from './assets/paymentLogos.svg';
import { ReactComponent as TechRadarLogo } from './assets/tradar.svg';
import { ReactComponent as TheInsiderLogo } from './assets/insider.svg';
import { ReactComponent as MeduzaLogo } from './assets/meduza.svg';
import { ReactComponent as RoscomLogo } from './assets/roscom.svg';

const PaymentMethods = () => {
  const { t, i18n } = useTranslation('reverse-vpn');
  return (
    <div className={classNames(styles.root)}>
      <div className={styles.text}>{t('paymentMethods')}</div>
      <div className={styles.labelsContainer}>
        <PaymentLogos />
      </div>
    </div>
  );
};

export default PaymentMethods;
