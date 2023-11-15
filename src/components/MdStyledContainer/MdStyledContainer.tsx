import { ReactNode } from 'react';
import styles from './MdStyledContainer.module.scss';

interface MdStyledContainerProps {
  children: ReactNode;
}

const MdStyledContainer = ({ children }: MdStyledContainerProps) => {
  return <div className={styles.root}>{children}</div>;
};

export default MdStyledContainer;
