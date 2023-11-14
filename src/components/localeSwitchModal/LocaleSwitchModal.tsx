// eslint-disable-next-line import/no-extraneous-dependencies
import { Modal } from '@mantine/core';
import { Languages, ChevronDown } from 'lucide-react';
import { useDisclosure } from '@mantine/hooks';
import localesList from '@src/shared/config/i18n/localesList';
import LocaleSwitchPill from '@src/components/LocaleSwitchPill/LocaleSwitchPill';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './LocaleSwitchModal.module.scss';

const LocaleSwitchModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Modal
        size="520px"
        opened={opened}
        onClose={close}
        withCloseButton={false}
        classNames={{
          content: styles.content,
          body: styles.body,
          inner: styles.inner,
          overlay: styles.overlay,
        }}
        overlayProps={{
          color: 'rgba(9, 11, 16)',
          opacity: 0.9,
        }}
      >
        <ul className={styles.langContainer}>
          {localesList.map((el) => (
            <LocaleSwitchPill
              key={el.code}
              text={el.name}
              active={i18n.resolvedLanguage === el.code}
              onClick={() => {
                const newUrl = location.pathname.split('/');
                newUrl[1] = el.code;
                navigate(newUrl.join('/'), { replace: true });
                i18n.changeLanguage(el.code);
                close();
              }}
            />
          ))}
        </ul>
      </Modal>
      <button
        type="button"
        className={styles.button}
        onClick={open}
        aria-label="Language change button"
      >
        <Languages />
        <span className={styles.iconButton}>
          <ChevronDown size={18} strokeWidth={2.6} />
        </span>
      </button>
    </>
  );
};

export default LocaleSwitchModal;
