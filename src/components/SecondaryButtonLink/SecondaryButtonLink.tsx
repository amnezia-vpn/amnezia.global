import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './SecondaryButtonLink.module.scss';

interface SecondaryButtonLinkProps {
  text: string;
  link: string;
  reloadDocument?: boolean;
}

const SecondaryButtonLink = ({ text, link, reloadDocument }: SecondaryButtonLinkProps) => {
  return (
    <Link
      to={link}
      reloadDocument={reloadDocument || false}
      type="button"
      className={classNames(styles.root)}
    >
      {text}
    </Link>
  );
};

export default SecondaryButtonLink;
