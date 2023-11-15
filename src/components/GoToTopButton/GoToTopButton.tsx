import { useWindowScroll } from '@mantine/hooks';
import { ArrowUp } from 'lucide-react';
import styles from './GoToTopButton.module.scss';

const GoToTopButton = () => {
  const [scroll, scrollTo] = useWindowScroll();

  const scrollToTop = () => {
    // window.scrollTo(0, 0);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    // <button className={styles.root} type="button" onClick={() => scrollTo({ y: 0 })}>
    <button className={styles.root} type="button" onClick={() => scrollToTop()}>
      <div className={styles.iconContainer}>
        <ArrowUp size={40} strokeWidth={2} color="#FBB26A" />
      </div>
    </button>
  );
};

export default GoToTopButton;
