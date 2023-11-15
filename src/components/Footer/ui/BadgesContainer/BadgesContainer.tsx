import classNames from 'classnames';
import TextLink from '@src/shared/ui/TextLink/TextLink';
import { useTranslation } from 'react-i18next';
import DownloadBadge from '@src/components/DownloadBadge/DownloadBadge';
import styles from './BadgesContainer.module.scss';

const BadgesContainer = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.root}>
      <div className={styles.label}>{`${t('download')} AMNEZIA VPN`}</div>
      <div className={styles.badgesWrapper}>
        <DownloadBadge variant="googlePlay" />
        <DownloadBadge variant="appStore" />
        <div className={styles.linkWrapper}>
          <TextLink
            text={t('footer.allDwnOpt')}
            to="./downloads"
            variant="light"
            className={styles.link}
          />
        </div>
      </div>
    </div>
  );
};

export default BadgesContainer;
