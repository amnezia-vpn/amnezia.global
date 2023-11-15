import classNames from 'classnames';
import Card from '@src/shared/ui/Card/Card';
import { useTranslation } from 'react-i18next';
import TextLink from '@src/shared/ui/TextLink/TextLink';
import styles from './GetStartedSection.module.scss';

const GetStartedSection = () => {
  const { t } = useTranslation('reverse-vpn');
  return (
    <div className={styles.root}>
      <Card bg="gradGrayAlt" className={styles.card}>
        <div className={styles.cardHeaderText}>{t('getStartedSection.header')}</div>
        <ul>
          <li>
            <div className={classNames(styles.step, styles.one)}>1</div>
            <div>
              <h3 className={styles.headerText}>{t('getStartedSection.step1.header')}</h3>
              <div className={classNames(styles.mainText, 'main-text', 'dimmed')}>
                {t('getStartedSection.step1.text')}
              </div>
            </div>
          </li>
          <li>
            <div className={classNames(styles.step, styles.two)}>2</div>
            <div>
              <h3 className={styles.headerText}>{t('getStartedSection.step2.header')}</h3>
              <div className={classNames(styles.mainText, 'main-text', 'dimmed')}>
                {t('getStartedSection.step2.text')}
              </div>
            </div>
          </li>
          <li>
            <div className={classNames(styles.step, styles.three)}>3</div>
            <div>
              <h3 className={styles.headerText}>{t('getStartedSection.step3.header')}</h3>
              <div className={classNames(styles.mainText, 'main-text', 'dimmed')}>
                {t('getStartedSection.step3.text')}
                <TextLink
                  className={styles.link}
                  variant="light"
                  text={t('getStartedSection.step3.link')}
                  to="."
                />
              </div>
            </div>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default GetStartedSection;
