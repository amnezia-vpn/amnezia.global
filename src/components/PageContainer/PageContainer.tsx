import { ReactNode } from 'react';
import styles from './PageContainer.module.scss';

interface PT {
  children?: ReactNode;
}

function PageContainer({ children }: PT) {
  return <div className={styles.pageContainer}>{children}</div>;
}

export default PageContainer;
