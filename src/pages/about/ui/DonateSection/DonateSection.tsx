import CopyButton from '@src/components/CopyButton/CopyButton';
import TextLink from '@src/shared/ui/TextLink/TextLink';
import { useTranslation } from 'react-i18next';
import styles from './DonateSection.module.scss';

const DonateSection = () => {
  const links = {
    btc: 'bc1qn9rhsffuxwnhcuuu4qzrwp4upkrq94xnh8r26u',
    xmr: '48spms39jt1L2L5vyw2RQW6CXD6odUd4jFu19GZcDyKKQV9U88wsJVjSbL4CfRys37jVMdoaWVPSvezCQPhHXUW5UKLqUp3',
    payeer: 'P2561305',
    patreon: 'https://www.patreon.com/amneziavpn',
  };

  const { t } = useTranslation('about-page');

  return (
    <div className={styles.root}>
      <h3>{t('donate')}</h3>
      <div className={styles.links}>
        <div>
          <strong>Bitcoin: </strong>
          {links.btc} <CopyButton copyValue={links.btc} />
        </div>
        <div>
          <strong>XMR: </strong>
          {links.xmr} <CopyButton copyValue={links.xmr} />
        </div>
        <div>
          <TextLink
            className={styles.textLink}
            variant="light"
            text="Payeer"
            to="https://payeer.com"
            openInNewTab
          />
          : {links.payeer} <CopyButton copyValue={links.payeer} />
        </div>
        <div>
          <TextLink
            className={styles.textLink}
            variant="light"
            text="Patreon: amneziavpn"
            to={links.patreon}
            openInNewTab
          />
        </div>
      </div>
    </div>
  );
};

export default DonateSection;
