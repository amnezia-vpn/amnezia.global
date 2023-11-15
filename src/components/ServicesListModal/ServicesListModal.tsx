import { Modal, ScrollArea, Space } from '@mantine/core';
import TextLink from '@src/shared/ui/TextLink/TextLink';
import styles from './ServicesListModal.module.scss';

interface ImageModalProps {
  opened: boolean;
  close: any;
}

interface ServicesListItemProps {
  url: string;
}

const ServicesListItem = ({ url }: ServicesListItemProps) => (
  <div>
    <TextLink openInNewTab variant="menu" text={url} to={`https://${url}`} />
  </div>
);

const ServicesListModal = ({ opened, close }: ImageModalProps) => {
  return (
    <Modal
      withCloseButton={false}
      classNames={{
        inner: styles.inner,
        content: styles.content,
        body: styles.body,
        overlay: styles.overlay,
      }}
      yOffset="70px"
      overlayProps={{
        color: 'rgba(9, 11, 16)',
        opacity: 0.9,
      }}
      scrollAreaComponent={ScrollArea.Autosize}
      size="lg"
      opened={opened}
      onClose={close}
      styles={{
        content: {
          '.mantine-ScrollArea-scrollbar': {
            paddingTop: '12px',
            paddingBottom: '12px',
            backgroundColor: 'transparent',
          },
          '.mantine-ScrollArea-scrollbar:hover': {
            '& .mantine-ScrollArea-thumb': {
              backgroundColor: '#2C2D30',
            },
            backgroundColor: 'transparent',
          },
          '.mantine-ScrollArea-thumb, .mantine-ScrollArea-thumb:hover': {
            backgroundColor: '#2C2D30',
          },
        },
      }}
    >
      <div className={styles.header}>Сайты для которых можно использовать бесплатный VPN</div>

      <div className={styles.groupTitle}>Банки</div>

      <div className={styles.linksContainer}>
        <ServicesListItem url="online.sberbank.ru" />
        <ServicesListItem url="alfabank.ru" />
        <ServicesListItem url="gazprombank.ru" />
        <ServicesListItem url="rosbank.ru" />
      </div>

      <div className={styles.groupTitle}>Сервисы и интернет магазины</div>

      <div className={styles.linksContainer}>
        <ServicesListItem url="rzd.ru" />
        <ServicesListItem url="pochta.ru" />
        <ServicesListItem url="sbermarket.ru" />
        <ServicesListItem url="lenta.com" />
        <ServicesListItem url="mvideo.ru" />
        <ServicesListItem url="onlinetrade.ru" />
        <ServicesListItem url="5ka.ru" />
      </div>

      <div className={styles.groupTitle}>Операторы связи</div>

      <div className={styles.linksContainer}>
        <ServicesListItem url="msk.rt.ru" />
        <ServicesListItem url="ttk.ru" />
        <ServicesListItem url="mgts.ru" />
        <ServicesListItem url="yota.ru" />
      </div>

      <div className={styles.groupTitle}>Министерства и гос. сервисы</div>

      <div className={styles.linksContainer}>
        <ServicesListItem url="мвд.рф" />
        <ServicesListItem url="lkk-mosobleirc.ru" />
        <ServicesListItem url="mosenergosbyt-lk.ru" />
        <ServicesListItem url="mos.ru" />
        <ServicesListItem url="gosuslugi.ru" />
        <ServicesListItem url="esia.gosuslugi.ru" />
        <ServicesListItem url="nalog.gov.ru" />
        <ServicesListItem url="lkul.nalog.ru" />
        <ServicesListItem url="fssp.gov.ru" />
        <ServicesListItem url="minstroyrf.gov.ru" />
        <ServicesListItem url="mvd.gov.ru" />
        <ServicesListItem url="minjust.gov.ru" />
        <ServicesListItem url="culture.gov.ru" />
        <ServicesListItem url="minpromtorg.gov.ru" />
        <ServicesListItem url="edu.gov.ru" />
        <ServicesListItem url="sfr.gov.ru" />
        <ServicesListItem url="rosreestr.gov.ru" />
        <ServicesListItem url="fmba.gov.ru" />
        <ServicesListItem url="ffoms.gov.ru" />
      </div>
      <Space h="30px" />
    </Modal>
  );
};

export default ServicesListModal;
