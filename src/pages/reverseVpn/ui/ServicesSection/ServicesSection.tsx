import classNames from 'classnames';
import Card from '@src/shared/ui/Card/Card';
import { useTranslation } from 'react-i18next';
import PseudoLink from '@src/shared/ui/PseudoLink/PseudoLink';
import { useDisclosure } from '@mantine/hooks';
import ServicesListModal from '@src/components/ServicesListModal/ServicesListModal';
import styles from './ServicesSection.module.scss';

const ServicesSection = () => {
  const { i18n, t } = useTranslation('reverse-vpn');
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className={classNames(styles.root)}>
      <ServicesListModal opened={opened} close={close} />
      <Card bg="gradGrayAlt" className={classNames(styles.card)}>
        <div className={styles.upperSection}>
          <div className={classNames(styles.textContainer)}>
            <h2>{t('servicesSection.header')}</h2>
            <div className={classNames(styles.mainText, 'main-text', 'dimmed')}>
              {t('servicesSection.text')}
            </div>
          </div>
          <div>
            <PseudoLink
              className={styles.link}
              variant="light"
              text={t('servicesSection.link')}
              onClick={open}
            />
          </div>
        </div>
        <div className={styles.logosContainer}>
          <img src="/img/services.png" width="auto" height="254" alt="" />
        </div>
      </Card>
    </div>
  );
};

export default ServicesSection;
