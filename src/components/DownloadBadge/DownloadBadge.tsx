import { useTranslation } from 'react-i18next';
import styles from '@src/components/Footer/ui/BadgesContainer/BadgesContainer.module.scss';
import getFallbackLangForRuEnOnlyContent from '@src/shared/helpers/getFallbackLangForRuEnOnlyContent';
import downloadLinks from '@src/shared/config/downloadLinks';

interface DownloadBadgeProps {
  variant: 'appStore' | 'googlePlay' | 'appGallery';
}

const DownloadBadge = ({ variant }: DownloadBadgeProps) => {
  const { t, i18n } = useTranslation();

  const switchBadge = () => {
    const lang = getFallbackLangForRuEnOnlyContent(i18n.language);

    switch (variant) {
      case 'appStore':
        return {
          link: downloadLinks.appStore,
          img: `/img/${lang}/dwn-app-store.png`,
        };
      case 'googlePlay':
        return {
          link: downloadLinks.googlePlay,
          img: `/img/${lang}/dwn-play.png`,
        };
      case 'appGallery':
        return {
          link: 'https://play.google.com/store/apps/details?id=org.amnezia.vpn',
          img: `/img/${lang}/dwn-app-gal.png`,
        };
      default:
        return {
          link: '/',
          img: '',
        };
    }
  };

  return (
    <div className={styles.root}>
      <a target="_blank" href={switchBadge().link} rel="noreferrer">
        <img height="60px" width="180px" src={switchBadge().img} alt="" />
      </a>
    </div>
  );
};

export default DownloadBadge;
