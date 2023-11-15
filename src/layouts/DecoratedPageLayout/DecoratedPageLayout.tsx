import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './DecoratedPageLayout.module.scss';

interface DecoratedPageLayoutProps {
  bg: string; // 'dark' | 'darker | 'map-dark'
  children: ReactNode;
}

const DecoratedPageLayout = ({ bg, children }: DecoratedPageLayoutProps) => {
  return (
    <div
      className={classNames(styles.decor, {
        [styles.bgDark]: bg === 'dark',
        [styles.bgDarker]: bg === 'darker',
        [styles.mapDarker]: bg === 'map-darker',
      })}
    >
      {/* <div className={styles.gradientContainer} /> */}
      {/* <div className={styles.glowContainer}> */}
      {/*  <div className={styles.glow} /> */}
      {/* </div> */}
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default DecoratedPageLayout;
