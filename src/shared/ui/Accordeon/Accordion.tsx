import { useState } from 'react';
import styles from './Accordion.module.scss';
import AccordionItem from './ui/AccordionItem/AccordionItem';

export interface AccItem {
  label: any;
  content: any;
}

export interface AccordionProps {
  data: AccItem[];
}

const Accordion = ({ data }: AccordionProps) => {
  const [clicked, setClicked] = useState<number | null>(null);

  const handleToggle = (index: number | null) => {
    if (clicked === index) return setClicked(null);
    return setClicked(index);
  };

  return (
    <div className={styles.root}>
      <ul className={styles.accordion}>
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            label={item.label}
            onToggle={() => handleToggle(index)}
            active={clicked === index}
          >
            {item.content}
          </AccordionItem>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
