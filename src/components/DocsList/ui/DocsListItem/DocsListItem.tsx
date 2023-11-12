import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './DocsListItem.module.scss';

export interface DocsListItemProps {
  text: string;
  to: string;
  subtext?: string;
}

const DocsListItem = ({ text, subtext = '', to }: DocsListItemProps) => {
  return (
    <div className={styles.root}>
      <Link className={styles.link} to={to}>
        <div className={styles.textContainer}>
          <div>{text}</div>
          <div className={styles.subtext}>{subtext}</div>
        </div>
        <div className={styles.iconWrapper}>
          <ChevronRight size={30} />
        </div>
      </Link>
    </div>
  );
};

export default DocsListItem;
