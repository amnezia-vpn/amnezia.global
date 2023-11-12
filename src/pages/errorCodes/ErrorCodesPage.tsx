import usePageDecoration from '@src/shared/hooks/usePageDecoration/usePageDecoration';
import { useTranslation } from 'react-i18next';
import SeoUpdater from '@src/components/SeoUpdater/SeoUpdater';
import DocsHeader from '@src/components/DocsHeader/DocsHeader';
import DocsList from '@src/components/DocsList/DocsList';

const ErrorCodesPage = () => {
  usePageDecoration('dark');

  const { t, i18n } = useTranslation();
  return (
    <div>
      <SeoUpdater
        title={t('errorCodesPage.metaTitle')}
        metaDesc={t('errorCodesPage.metaContent')}
      />
      <DocsHeader
        text={t('errorCodesPage.header.text')}
        breadcrumbs={[
          { title: t('navigation.support'), href: '../support' },
          { title: t('troubleshootingPage.header.text'), href: '../troubleshooting' },
        ]}
      />
      <DocsList
        dataLink={`https://raw.githubusercontent.com/amnezia-vpn/amnezia.org-content/master/docs/${i18n.resolvedLanguage}/troubleshooting/error-codes/tableOfContents.json`}
      />
    </div>
  );
};

export default ErrorCodesPage;
