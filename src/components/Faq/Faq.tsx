import { useTranslation } from 'react-i18next';
import Accordion from '@src/shared/ui/Accordeon/Accordion';
import styles from './Faq.module.scss';

interface FaqDataType {
  label: string;
  content: string | JSX.Element;
}
interface FaqProps {
  faqData: FaqDataType[];
  header?: string;
}

const Faq = ({ faqData, header }: FaqProps) => {
  const { t } = useTranslation('support-page');

  return (
    <div className={styles.root}>
      {header ? <div className={styles.header}>{t('learnMore.header')}</div> : ''}
      <Accordion data={faqData} />
    </div>
  );
};

export default Faq;
