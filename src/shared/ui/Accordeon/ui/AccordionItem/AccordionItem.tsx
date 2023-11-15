import { AccItem } from '@src/shared/ui/Accordeon/Accordion';
import classNames from 'classnames';
import { ReactNode, useRef } from 'react';
import { MinusIcon, PlusIcon } from 'lucide-react';
import styles from './AccordionItem.module.scss';

interface AccordionItemProps {
  label: string;
  children: ReactNode;
  onToggle: any;
  active: boolean;
}

const AccordionItem = ({ label, onToggle, active, children }: AccordionItemProps) => {
  const contentElRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  return (
    <li className={classNames(styles.item, { [styles.active]: active })}>
      <button className={styles.button} onClick={onToggle}>
        {label}
        <span className={styles.control}>
          {active ? <MinusIcon size={26} /> : <PlusIcon size={26} />}{' '}
        </span>
      </button>
      <div
        ref={contentElRef}
        className={classNames(styles.contentWrapper, { [styles.open]: active })}
        style={active ? { height: contentElRef.current.scrollHeight } : { height: '0px' }}
      >
        <div className={styles.content}>{children}</div>
      </div>
    </li>
  );
};

export default AccordionItem;
