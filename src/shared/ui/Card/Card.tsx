import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Card.module.scss';

interface PT {
  children?: ReactNode;
  bg?: 'gradGray' | 'gradPurple' | 'plainGray' | 'gradGrayAlt' | 'plainGrayAlt' | 'gradGrayLight';
  className?: string;
}

const Card = ({ children, bg = 'gradGray', className = '' }: PT) => {
  return (
    <div
      className={classNames(
        styles.root,
        {
          [styles.gradGray]: bg === 'gradGray',
          [styles.gradGrayAlt]: bg === 'gradGrayAlt',
          [styles.gradGrayLight]: bg === 'gradGrayLight',
          [styles.gradPurple]: bg === 'gradPurple',
          [styles.plainGray]: bg === 'plainGray',
          [styles.plainGrayAlt]: bg === 'plainGrayAlt',
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
