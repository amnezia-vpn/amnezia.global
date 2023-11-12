import { Skeleton } from '@mantine/core';
import styles from './DocsListSkeleton.module.scss';

const DocsListSkeleton = () => {
  return (
    <div className={styles.root}>
      {Array(8)
        .fill('')
        .map((el, i) => (
          <div key={i} className={styles.wrapper}>
            <Skeleton height={54} width="100%" radius="8px" />
          </div>
        ))}
    </div>
  );
};

export default DocsListSkeleton;
