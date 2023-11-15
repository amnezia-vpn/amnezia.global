import classNames from 'classnames';
import { FC, ReactNode, useRef } from 'react';
import { MinusIcon, PlusIcon } from 'lucide-react';
import styles from './AccordionItemV2.module.scss';

interface AccordionItemProps {
  value?: any;
  label: any;
  children: ReactNode;
  onToggle?: any;
  active?: boolean;
}

const AccordionItemV2 = ({
  value,
  label,
  onToggle,
  active = false,
  children,
}: AccordionItemProps) => {
  // animated (hide controls that overflow)

  // const contentElRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  // return (
  //   <li className={classNames(styles.item, { [styles.active]: active })}>
  //     <button className={styles.button} onClick={onToggle}>
  //       {label}
  //       <span className={styles.control}>
  //         {active ? <MinusIcon size={26} /> : <PlusIcon size={26} />}{' '}
  //       </span>
  //     </button>
  //     <div
  //       ref={contentElRef}
  //       className={classNames(styles.contentWrapper, { [styles.open]: active })}
  //       // style={active ? { height: contentElRef.current.scrollHeight } : { height: '0px' }}
  //     >
  //       <div className={styles.content}>
  //         <div className={styles.contentInner}>{children}</div>
  //       </div>
  //     </div>
  //   </li>
  // );

  // mounted (allow controls that overflow)

  return (
    <li className={styles.item}>
      <button type="button" className={styles.button} onClick={onToggle}>
        {label}
        <span className={styles.control}>
          {active ? <MinusIcon size={26} /> : <PlusIcon size={26} />}{' '}
        </span>
      </button>
      {active ? <div className={styles.content}>{children}</div> : undefined}
    </li>
  );
};

export default AccordionItemV2;
