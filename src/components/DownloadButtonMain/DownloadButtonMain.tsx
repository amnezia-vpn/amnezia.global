import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './DownloadButtonMain.module.scss';

interface DownloadButtonProps {
  text: string;
  link: string;
  reloadDocument?: boolean;
}

const DownloadButtonMain = ({ text, link, reloadDocument }: DownloadButtonProps) => {
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

export default DownloadButtonMain;
