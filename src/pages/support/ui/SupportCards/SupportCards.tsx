import { useTranslation } from 'react-i18next';
import SupportCard from '@src/pages/support/ui/SupportCards/ui/SupportCard/SupportCard';
import styles from './SupportCards.module.scss';

const SupportCards = () => {
  const { t } = useTranslation('support-page');
  return (
    <div className={styles.root}>
      <SupportCard
        featureHighlight
        header={t('howToCard.header')}
        text={t('howToCard.text')}
        to="../instructions/0_starter-guide"
      />
      <SupportCard
        header={t('learnMoreCard.header')}
        text={t('learnMoreCard.text')}
        to="../learn-more"
      />
      <SupportCard header={t('techFaqCard.header')} text={t('techFaqCard.text')} to="../tech-faq" />
      <SupportCard
        header={t('instructionsCard.header')}
        text={t('instructionsCard.text')}
        to="../instructions"
      />
      {/* <SupportCard */}
      {/*  header="Решение проблем" */}
      {/*  text="Помогите, не работает ааа!!!" */}
      {/*  to="../troubleshooting" */}
      {/* /> */}
      {/* <SupportCard header="FAQ" text="Часто задаваемые вопросы" to="../learnMore" /> */}
    </div>
  );
};

export default SupportCards;
