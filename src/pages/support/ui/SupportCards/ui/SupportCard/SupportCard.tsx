import classNames from 'classnames';
import Card from '@src/shared/ui/Card/Card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './SupportCardLink.module.scss';

interface SupportCardProps {
  featureHighlight?: boolean;
  header: string;
  text: string;
  to: string;
}

const SupportCard = ({ header, text, to, featureHighlight }: SupportCardProps) => {
  return (
    <Link to={to} className={styles.rootLinkWrapper}>
      <Card bg={featureHighlight ? 'gradPurple' : undefined} className={styles.supportCard}>
        <div>
          <h2>{header}</h2>
          <div className={classNames('main-text', 'dimmed', styles.text)}>{text}</div>
        </div>
        <div className={styles.iconWrapper}>
          <ArrowRight size={40} className={styles.icon} color="#FBB26A" strokeWidth={2} />
        </div>
      </Card>
    </Link>
  );
};

export default SupportCard;
