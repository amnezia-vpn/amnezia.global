import { Modal } from '@mantine/core';
import styles from './ImageModal.module.scss';

interface ImageModalProps {
  opened: boolean;
  close: any;
  imageUrl: string;
}

const ImageModal = ({ opened, close, imageUrl }: ImageModalProps) => {
  return (
    <Modal
      centered
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
      size="auto"
      opened={opened}
      onClose={close}
    >
      <img src={imageUrl} />
    </Modal>
  );
};

export default ImageModal;
