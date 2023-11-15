import { Skeleton } from '@mantine/core';
import styles from './InstructionSkeleton.module.scss';

const InstructionSkeleton = () => {
  return (
    <div className={styles.root}>
      <Skeleton height={60} width="90%" mb="60px" radius="8px" />
      <Skeleton height={40} width="70%" mb="30px" radius="8px" />
      <Skeleton height={100} mb={60} radius="8px" />
      <Skeleton height={40} width="90%" mb="30px" radius="8px" />
      <Skeleton height={400} mb={60} radius="16px" />
      <Skeleton height={40} width="80%" mb="30px" radius="8px" />
      <Skeleton height={400} mb={30} radius="16px" />
    </div>
  );
};

export default InstructionSkeleton;
