import classNames from 'classnames';
import { useMediaQuery } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';
import styles from './HeaderAppScreen.module.scss';

const HeaderAppScreen = () => {
  const { i18n } = useTranslation();
  const isLargerThanMobile = useMediaQuery('(min-width: 768px)');
  return (
    <div className={styles.root}>
      {isLargerThanMobile ? (
        <div className={styles.outer}>
          <div className={classNames(styles.ripple, styles.three)} />
          <div className={classNames(styles.ripple, styles.two)} />
          <div className={classNames(styles.ripple, styles.one)} />
        </div>
      ) : undefined}
      <div className={styles.screenWrapper}>
        <img
          src={`/img/${i18n.resolvedLanguage}/app-screen.png`}
          className={styles.screenImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default HeaderAppScreen;
