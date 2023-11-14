import HeaderText from '@src/pages/reverseVpn/ui/HeaderText/HeaderText';
import PaymentMethods from '@src/pages/reverseVpn/ui/PaymentMethods/PaymentMethods';
import PlansSection from '@src/pages/reverseVpn/ui/PlansSection/PlansSection';
import usePageDecoration from '@src/shared/hooks/usePageDecoration/usePageDecoration';
import { useTranslation } from 'react-i18next';
import SeoUpdater from '@src/components/SeoUpdater/SeoUpdater';
import ServicesSection from '@src/pages/reverseVpn/ui/ServicesSection/ServicesSection';
import GetStartedSection from '@src/pages/reverseVpn/ui/GetStartedSection/GetStartedSection';
import ReverseDownloadCard from '@src/components/ReverseDownloadCard/ReverseDownloadCard';

const ReverseVpnPage = () => {
  usePageDecoration('darker');
  const { t } = useTranslation('reverse-vpn');
  return (
    <div>
      <SeoUpdater title={t('metaTitle')} metaDesc={t('metaContent')} />
      <HeaderText />
      <PlansSection />
      <PaymentMethods />
      <ReverseDownloadCard />
      <ServicesSection />
      <GetStartedSection />
    </div>
  );
};

export default ReverseVpnPage;
