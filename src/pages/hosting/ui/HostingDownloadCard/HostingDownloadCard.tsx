import classNames from 'classnames';
import Card from '@src/shared/ui/Card/Card';
import { useTranslation } from 'react-i18next';
// import TextLink from '@src/shared/ui/TextLink/TextLink';
// import PseudoLink from '@src/shared/ui/PseudoLink/PseudoLink';
// import { useDisclosure } from '@mantine/hooks';
// import ServicesListModal from '@src/components/ServicesListModal/ServicesListModal';
// import Divider from '@src/shared/ui/Divider/Divider';
import DownloadButtonMain from '@src/components/DownloadButtonMain/DownloadButtonMain';
import SecondaryButtonLink from '@src/components/SecondaryButtonLink/SecondaryButtonLink';
import LogoWithText from '@src/components/LogoWithText/LogoWithText';
import styles from './HostingDownloadCard.module.scss';

const LandingDownloadCard = () => {
  const { t } = useTranslation(['translation', 'hosting-page']);

  return (
    <div className={classNames(styles.root)}>
      <h1>{t('downloadCard.header', { ns: 'hosting-page' })}</h1>
      <Card bg="plainGrayVds" className={classNames(styles.card)}>
        <div className={classNames(styles.textContainer)}>
          <h2>{t('downloadCard.text', { ns: 'hosting-page' })}</h2>
          <div className={classNames(styles.mainText, 'main-text', 'dimmed')}>
            {t('downloadCard.subtext', { ns: 'hosting-page' })}
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.bottomSection}>
          <LogoWithText />
          <div className={styles.buttonBar}>
            <div className={classNames(styles.buttonWrapper, styles.downloadBtnWrapper)}>
              <DownloadButtonMain text={t('download')} link="../downloads" />
            </div>
            <div className={styles.buttonWrapper}>
              <SecondaryButtonLink text={t('readMoreButton')} link=".." />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LandingDownloadCard;
