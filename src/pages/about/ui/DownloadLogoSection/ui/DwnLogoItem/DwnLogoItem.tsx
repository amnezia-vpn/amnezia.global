import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import styles from './DwnLogoItem.module.scss';

interface DwnLogoItemProps {
  imgLink: string;
  fileLink: string;
}

const DwnLogoItem = ({ imgLink, fileLink }: DwnLogoItemProps) => {
  const { t } = useTranslation();
  return (
    <div className={styles.dwnLogoWrapper}>
      <div className={styles.dwnLogo}>
        <img src={imgLink} alt="" />
      </div>
      <a
        className={classNames('link', styles.dwnLogoLink)}
        href={fileLink}
        // download={`Amnezia-logo-${i + 1}`}
      >
        {t('download')}
      </a>
    </div>
  );
};

export default DwnLogoItem;
