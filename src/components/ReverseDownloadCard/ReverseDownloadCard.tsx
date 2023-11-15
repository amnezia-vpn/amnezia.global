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
import styles from './ReverseDownloadCard.module.scss';

const LandingDownloadCard = () => {
  const { t } = useTranslation(['translation', 'reverse-vpn']);

  return (
    <div className={classNames(styles.root)}>
      <Card bg="gradGrayAlt" className={classNames(styles.card)}>
        <div className={classNames(styles.textContainer)}>
          <h2>{t('downloadCard.header', { ns: 'reverse-vpn' })}</h2>
          <div className={classNames(styles.mainText, 'main-text', 'dimmed')}>
            {t('downloadCard.text', { ns: 'reverse-vpn' })}
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
