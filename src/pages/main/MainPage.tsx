import HeaderText from '@src/pages/main/ui/HeaderText/HeaderText';
import HeaderAppScreen from '@src/pages/main/ui/HeaderAppScreen/HeaderAppScreen';
import HeaderDownload from '@src/pages/main/ui/HeaderDownload/HeaderDownload';
import AffiliatedLogos from '@src/pages/main/ui/AffiliatedLogos/AffiliatedLogos';
import ProtocolsCard from '@src/pages/main/ui/ProtocolsCard/ProtocolsCard';
import FeaturesCard from '@src/pages/main/ui/FeaturesCard/FeaturesCard';
import SecureSimpleFreeSection from '@src/pages/main/ui/SecureEasyFreeSection/SecureSimpleFreeSection';
import PrivacyTextSection from '@src/pages/main/ui/PrivacyTextSection/PrivacyTextSection';
import LogsEncryptSection from '@src/pages/main/ui/LogsEncryptSection/LogsEncryptSection';
import MoreFeaturesSection from '@src/pages/main/ui/MoreFeaturesSection/MoreFeaturesSection';
import usePageDecoration from '@src/shared/hooks/usePageDecoration/usePageDecoration';
import { useTranslation } from 'react-i18next';
import SeoUpdater from '@src/components/SeoUpdater/SeoUpdater';

const MainPage = () => {
  usePageDecoration('darker');
  const { t } = useTranslation('main-page');
  return (
    <div>
      <SeoUpdater title={t('metaTitle')} metaDesc={t('metaContent')} />
      <HeaderText />
      <HeaderDownload />
      <HeaderAppScreen />
      <AffiliatedLogos />
      <ProtocolsCard />
      <FeaturesCard />
      <SecureSimpleFreeSection />
      <PrivacyTextSection />
      <LogsEncryptSection />
      <MoreFeaturesSection />
    </div>
  );
};

export default MainPage;
