import React, { ReactNode, useState } from 'react';
import styles from './AccordionV2.module.scss';

export interface AccordionProps {
  children: ReactNode;
}

const AccordionV2 = ({ children }: AccordionProps) => {
  const [clicked, setClicked] = useState<string | null>(null);

  const handleToggle = (index: string | null) => {
    if (clicked === index) return setClicked(null);
    return setClicked(index);
  };

  return (
    <div className={styles.root}>
      <ul className={styles.accordion}>
        {React.Children.map(children, (child: any, index) => {
          if (React.isValidElement<any>(child)) {
            return React.cloneElement<any>(child, {
              active: clicked === child.props.value,
              onToggle: () => handleToggle(child.props.value),
            });
          }
          return child;
        })}
      </ul>
    </div>
  );
};

export default AccordionV2;
