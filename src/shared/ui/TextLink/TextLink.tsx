import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './TextLink.module.scss';

interface TextLinkProps {
  text: any;
  to: string;
  reloadDocument?: boolean;
  variant?: 'light' | 'dark' | 'underline' | 'menu';
  className?: string;
  openInNewTab?: boolean;
}

const TextLink = ({
  text,
  to,
  variant = 'underline',
  reloadDocument = false,
  className = '',
  openInNewTab = false,
}: TextLinkProps) => {
  return (
    <Link
      to={to}
      target={openInNewTab ? '_blank' : ''}
      reloadDocument={reloadDocument || false}
      className={classNames(
        styles.root,
        { [styles.linkLight]: variant === 'light' },
        { [styles.linkDark]: variant === 'dark' },
        { [styles.linkUnderline]: variant === 'underline' },
        { [styles.linkMenu]: variant === 'menu' },
        className
      )}
    >
      {text}
    </Link>
  );
};

export default TextLink;
