import DocsHeader from '@src/components/DocsHeader/DocsHeader';
import DocsList from '@src/components/DocsList/DocsList';
import usePageDecoration from '@src/shared/hooks/usePageDecoration/usePageDecoration';
import { useTranslation } from 'react-i18next';
import SeoUpdater from '@src/components/SeoUpdater/SeoUpdater';
import LegacyInstructionsLink from '@src/components/LegacyInstructionsLink/LegacyInstructionsLink';

const InstructionsPage = () => {
  usePageDecoration('dark');

  const { t, i18n } = useTranslation();
  return (
    <div>
      <SeoUpdater
        title={t('instructionsPage.metaTitle')}
        metaDesc={t('instructionsPage.metaContent')}
      />
      <DocsHeader
        text={t('instructionsPage.header.text')}
        breadcrumbs={[{ title: t('navigation.support'), href: '../support' }]}
      />
      <DocsList
        dataLink={`https://raw.githubusercontent.com/amnezia-vpn/amnezia.org-content/master/docs/${i18n.resolvedLanguage}/instructions/tableOfContents.json`}
      />
      <LegacyInstructionsLink />
    </div>
  );
};

export default InstructionsPage;
