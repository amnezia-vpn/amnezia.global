import usePageDecoration from '@src/shared/hooks/usePageDecoration/usePageDecoration';
import { useTranslation } from 'react-i18next';
import SeoUpdater from '@src/components/SeoUpdater/SeoUpdater';
import AffiliatedLogos from '@src/components/AffiliatedLogos/AffiliatedLogos';
import HeroMap from '@src/pages/hosting/ui/HeroMap/HeroMap';
import HostingDownloadCard from '@src/pages/hosting/ui/HostingDownloadCard/HostingDownloadCard';
import ServerSpecs from '@src/pages/hosting/ui/ServerSpecs/ServerSpecs';
import HostingPaymentMethods from '@src/pages/hosting/ui/HostingPaymentMethods/HostingPaymentMethods';

const HostingPage = () => {
  usePageDecoration('map-darker');
  const { t } = useTranslation('hosting-page');
  return (
    <div>
      <SeoUpdater title={t('metaTitle')} metaDesc={t('metaContent')} />
      <HeroMap />
      <AffiliatedLogos />
      <HostingDownloadCard />
      <ServerSpecs />
      <HostingPaymentMethods />
    </div>
  );
};

export default HostingPage;
