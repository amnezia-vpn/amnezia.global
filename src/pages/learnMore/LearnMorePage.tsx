import { useTranslation } from 'react-i18next';
import usePageDecoration from '@src/shared/hooks/usePageDecoration/usePageDecoration';
import ContactsCard from '@src/components/ContactsCard/ContactsCard';
import DocsHeader from '@src/components/DocsHeader/DocsHeader';
import SeoUpdater from '@src/components/SeoUpdater/SeoUpdater';
import Faq from '@src/components/Faq/Faq';
import learnMoreDataRu from './learnMoreDataRu';
import faqDataEn from './learnMoreDataEn';
import styles from './LearnMorePage.module.scss';

const LearnMorePage = () => {
  usePageDecoration('dark');
  const { i18n, t } = useTranslation(['translation', 'support-page']);

  return (
    <div className={styles.root}>
      <SeoUpdater title={t('learnMorePage.metaTitle')} metaDesc={t('learnMorePage.metaContent')} />
      <DocsHeader
        breadcrumbs={[
          { title: t('navigation.support', { ns: 'translation' }), href: '../support' },
        ]}
        text={t('learnMorePage.header', { ns: 'translation' })}
        variant="secondary"
      />
      <div className={styles.faqWrapper}>
        <Faq faqData={i18n.resolvedLanguage === 'ru' ? learnMoreDataRu : faqDataEn} />
        {/*  <FaqMd /> */}
      </div>

      <div className={styles.contactsCardWrapper}>
        <ContactsCard />
      </div>
    </div>
  );
};

export default LearnMorePage;
