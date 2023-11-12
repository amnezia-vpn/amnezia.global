import TextLink from '@src/shared/ui/TextLink/TextLink';
import getFallbackLangForRuEnOnlyContent from '@src/shared/helpers/getFallbackLangForRuEnOnlyContent';
import { Center } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import styles from './LegacyInstructionsLink.module.scss';

const LegacyInstructionsLink = () => {
  const { t, i18n } = useTranslation();
  return (
    <Center className={styles.root}>
      <TextLink
        className={styles.link}
        variant="dark"
        text={t('instructionsPage.legacyInstructionsLink')}
        to={`https://${getFallbackLangForRuEnOnlyContent(i18n.resolvedLanguage)}-docs.amnezia.org`}
      />
    </Center>
  );
};

export default LegacyInstructionsLink;
