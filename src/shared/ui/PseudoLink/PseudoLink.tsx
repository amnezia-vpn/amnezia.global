import classNames from 'classnames';
import styles from './PseudoLink.module.scss';

interface TextLinkProps {
  text: any;
  variant?: 'light' | 'dark' | 'underline';
  className?: string;
  onClick: any;
}

const TextLink = ({ text, variant = 'underline', className = '', onClick }: TextLinkProps) => {
  return (
    <div
      onClick={onClick}
      className={classNames(
        styles.root,
        { [styles.linkLight]: variant === 'light' },
        { [styles.linkDark]: variant === 'dark' },
        { [styles.linkUnderline]: variant === 'underline' },
        className
      )}
    >
      {text}
    </div>
  );
};

export default TextLink;
