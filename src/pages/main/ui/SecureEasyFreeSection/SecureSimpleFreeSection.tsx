import classNames from 'classnames';
import Card from '@src/shared/ui/Card/Card';
import { useTranslation } from 'react-i18next';
import TextLink from '@src/shared/ui/TextLink/TextLink';
import styles from './SecureSimpleFreeSection.module.scss';
import auditedImage from './assets/audited.png';

const SecureSimpleFreeSection = () => {
  const { t, i18n } = useTranslation('main-page');
  return (
    <div className={classNames(styles.root)}>
      <div className={styles.gridSecure}>
        <Card>
          <div className={classNames(styles.secureCard, styles.cardContent)}>
            <img
              height="273px"
              width="272px"
              className={styles.auditedImage}
              src={auditedImage}
              alt=""
            />
            <section className="main-text dimmed">
              <h2>{t('secureSimpleFreeSection.secure.header')}</h2>
              <div>{t('secureSimpleFreeSection.secure.text.part1')}</div>
              <TextLink
                text={t('secureSimpleFreeSection.secure.text.link')}
                to="https://github.com/amnezia-vpn"
                openInNewTab
                variant="underline"
              />
              <span className="text-indent-top">
                {t('secureSimpleFreeSection.secure.text.part2')}
              </span>
            </section>
          </div>
        </Card>
      </div>

      <div className={styles.gridSimple}>
        <Card>
          <div className={classNames(styles.simpleCard, styles.cardContent)}>
            <section className={styles.simpleCardTextSection}>
              <h2>{t('secureSimpleFreeSection.simple.header')}</h2>
              <div className={classNames('main-text', 'dimmed')}>
                {t('secureSimpleFreeSection.simple.text')}
              </div>
            </section>
            <img
              height="296px"
              width="400px"
              className={styles.connectImage}
              src={`/img/${i18n.resolvedLanguage}/main-connect.png`}
              alt=""
            />
          </div>
        </Card>
      </div>

      <div className={styles.gridFree}>
        <Card bg="gradPurple">
          <div className={classNames(styles.cardContent)}>
            <section>
              <h2>{t('secureSimpleFreeSection.free.header')}</h2>
              <div className={classNames(styles.freeCardText, 'main-text')}>
                {t('secureSimpleFreeSection.free.text')}
              </div>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SecureSimpleFreeSection;
