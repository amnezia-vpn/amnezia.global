import classNames from 'classnames';
import styles from './SliderExternalControlDots.module.scss';

interface SliderExternalControlDotsProps {
  totalDots: number;
  currentDot: number;
  action: any;
}

const SliderExternalControlDots = ({
  totalDots,
  currentDot,
  action,
}: SliderExternalControlDotsProps) => {
  return (
    <div className={styles.root}>
      {Array(totalDots)
        .fill('')
        .map((el, i) => (
          <div
            key={i}
            onClick={() => action(i)}
            className={classNames(styles.dot, { [styles.active]: currentDot === i })}
          />
        ))}
    </div>
  );
};

export default SliderExternalControlDots;
