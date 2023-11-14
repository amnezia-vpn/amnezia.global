import Card from '@src/shared/ui/Card/Card';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { ReactComponent as CpuIcon } from './assets/cpu.svg';
import { ReactComponent as RamIcon } from './assets/ram.svg';
import { ReactComponent as SsdIcon } from './assets/ssd.svg';
import styles from './ServerSpecs.module.scss';

const ServerSpecs = () => {
  const { t } = useTranslation('hosting-page');

  return (
    <div className={styles.root}>
      <h1>{t('serverSpecs.header')}</h1>
      <div className={styles.cards}>
        <Card bg="plainGrayVds" className={classNames(styles.card, styles.gridCpu)}>
          <div className={styles.cpuRowWithIcon}>
            <div>
              <h1 className={styles.colorfulText}>{t('serverSpecs.cpu.header')}</h1>
              <h3>{t('serverSpecs.cpu.text')}</h3>
            </div>
            <CpuIcon />
          </div>
          <div className={classNames(styles.cpuSubtext, 'main-text', 'dimmed')}>
            {t('serverSpecs.cpu.subtext')}
          </div>
        </Card>
        <Card bg="plainGrayVds" className={classNames(styles.card, styles.gridSsd)}>
          <SsdIcon />
          <div className={classNames('h-70', styles.colorfulText)}>
            {t('serverSpecs.ssd.header')}
          </div>
          <h3>{t('serverSpecs.ssd.text')}</h3>
          <div className={styles.ssdSubtext}>
            <div className={classNames('main-text', 'dimmed')}>
              {t('serverSpecs.ssd.subtext.p1')}
            </div>
            <div className={classNames('main-text', 'dimmed')}>
              {t('serverSpecs.ssd.subtext.p2')}
            </div>
          </div>
        </Card>
        <Card bg="plainGrayVds" className={classNames(styles.card, styles.gridRam)}>
          <div>
            <h1 className={styles.colorfulText}>{t('serverSpecs.ram.header')}</h1>
            <h3>{t('serverSpecs.ram.text')}</h3>
          </div>
          <RamIcon />
        </Card>
        <Card bg="plainGrayVds" className={classNames(styles.card, styles.gridNet)}>
          <div className={styles.netTextSection}>
            <h3>{t('serverSpecs.net.text')}</h3>
            <div className={classNames(styles.netSubtext, 'main-text', 'dimmed')}>
              {t('serverSpecs.net.subtext')}
            </div>
          </div>
          <div>
            <h1 className={styles.colorfulText}>{t('serverSpecs.net.header')}</h1>
            <div className={styles.netHeaderSubtext}>{t('serverSpecs.net.headerSubtext')}</div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ServerSpecs;
