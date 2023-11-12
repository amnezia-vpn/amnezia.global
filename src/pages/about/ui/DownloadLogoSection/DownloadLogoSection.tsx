import Accordion from '@src/shared/ui/Accordeon/Accordion';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import DwnLogoItem from '@src/pages/about/ui/DownloadLogoSection/ui/DwnLogoItem/DwnLogoItem';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Card from '@src/shared/ui/Card/Card';
import { DownloadIcon } from 'lucide-react';
import styles from './DownloadLogoSection.module.scss';

const DownloadLogoSection = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { t } = useTranslation(['translation', 'about-page']);

  const logosLinks = [
    {
      imgLink: '/img/logos/full-logo-vpn.svg',
      fileLink: '/zip/Amnezia_VPN_full_logo.zip',
    },
    {
      imgLink: '/img/logos/logo-text-vpn.svg',
      fileLink: '/zip/Amnezia_VPN_text_logo.zip',
    },
    {
      imgLink: '/img/logos/logo-a.svg',
      fileLink: '/zip/Amnezia_VPN_A_symbol.zip',
    },
    {
      imgLink: '/img/logos/logo-with-a.svg',
      fileLink: '/zip/Amnezia_full_logo.zip',
    },
    {
      imgLink: '/img/logos/logo-text.svg',
      fileLink: '/zip/Amnezia_text_logo.zip',
    },
  ];

  return (
    <div className={styles.root}>
      <Modal
        size="803px"
        opened={opened}
        onClose={close}
        withCloseButton={false}
        classNames={{
          content: styles.modalContent,
          body: styles.modalBody,
          inner: styles.inner,
          overlay: styles.overlay,
        }}
        overlayProps={{
          color: 'rgba(9, 11, 16)',
          opacity: 0.9,
        }}
      >
        <div className={styles.dwnLogosContainer}>
          {logosLinks.map(({ imgLink, fileLink }) => (
            <DwnLogoItem key={imgLink} imgLink={imgLink} fileLink={fileLink} />
          ))}
        </div>
      </Modal>

      <button onClick={open} className={styles.dwnButton}>
        {t('downloadLogo', { ns: 'about-page' })}
        <div className={styles.iconWrapper}>
          <DownloadIcon size={24} />
        </div>
      </button>

      {/* <Accordion */}
      {/*  data={[ */}
      {/*    { */}
      {/*      label: t('downloadLogo', { ns: 'about-page' }), */}
      {/*      content: ( */}
      {/*        <div className={styles.dwnLogosContainer}> */}
      {/*          {logosLinks.map(({ imgLink, fileLink }) => ( */}
      {/*            <DwnLogoItem key={imgLink} imgLink={imgLink} fileLink={fileLink} /> */}
      {/*          ))} */}
      {/*        </div> */}
      {/*      ), */}
      {/*    }, */}
      {/*  ]} */}
      {/* /> */}
    </div>
  );
};

{
  /* <a href="/img/logos/logo-with-a-w-glow.svg" download="myimage"> */
}
{
  /*  <img src="/img/logos/logo-with-a-w-glow.svg" /> */
}
{
  /* </a> */
}

export default DownloadLogoSection;
