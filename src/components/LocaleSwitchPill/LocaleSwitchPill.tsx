import classNames from 'classnames';
import styles from './LocaleSwitchPill.module.scss';

interface MenuPillProps {
  text: string;
  active?: boolean;
  onClick: any;
}

const LocaleSwitchPill = ({ text, active = false, onClick }: MenuPillProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(styles.root, { [styles.active]: active })}
    >
      {text}
    </button>
  );
};

export default LocaleSwitchPill;
