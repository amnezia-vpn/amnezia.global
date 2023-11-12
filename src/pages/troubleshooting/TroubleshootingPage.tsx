import usePageDecoration from '@src/shared/hooks/usePageDecoration/usePageDecoration';
import { useTranslation } from 'react-i18next';
import SeoUpdater from '@src/components/SeoUpdater/SeoUpdater';
import DocsHeader from '@src/components/DocsHeader/DocsHeader';
import DocsList from '@src/components/DocsList/DocsList';

const TroubleshootingPage = () => {
  usePageDecoration('dark');

  const { t, i18n } = useTranslation();
  return (
    <div>
      <SeoUpdater
        title={t('troubleshootingPage.metaTitle')}
        metaDesc={t('troubleshootingPage.metaContent')}
      />
      <DocsHeader
        text={t('troubleshootingPage.header.text')}
        breadcrumbs={[{ title: t('navigation.support'), href: '../support' }]}
      />
      <DocsList
        dataLink={`https://raw.githubusercontent.com/amnezia-vpn/amnezia.org-content/master/docs/${i18n.resolvedLanguage}/troubleshooting/tableOfContents.json`}
      />
    </div>
  );
};

export default TroubleshootingPage;
