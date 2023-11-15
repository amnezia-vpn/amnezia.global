import SupportHeaderText from '@src/pages/support/ui/SupportHeaderText/SupportHeaderText';
import SupportCards from '@src/pages/support/ui/SupportCards/SupportCards';
import ContactsCard from '@src/components/ContactsCard/ContactsCard';
import usePageDecoration from '@src/shared/hooks/usePageDecoration/usePageDecoration';
import { useTranslation } from 'react-i18next';
import SeoUpdater from '@src/components/SeoUpdater/SeoUpdater';
import styles from './SupportPage.module.scss';

const SupportPage = () => {
  usePageDecoration('darker');
  const { t } = useTranslation('support-page');
  return (
    <div>
      <SeoUpdater title={t('metaTitle')} metaDesc={t('metaContent')} />
      <SupportHeaderText />
      <SupportCards />
      <div className={styles.contactsCardWrapper}>
        <ContactsCard />
      </div>
    </div>
  );
};

export default SupportPage;
