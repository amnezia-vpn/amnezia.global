import { useTranslation } from 'react-i18next';
import TextLink from '@src/shared/ui/TextLink/TextLink';
import { ChevronRight } from 'lucide-react';
import { Breadcrumbs } from '@mantine/core';
import styles from './DocsHeader.module.scss';

interface DocsHeaderProps {
  variant?: string; // primary | secondary
  text: string;
  breadcrumbs: { title: string; href: string }[];
}

const DocsHeader = ({ text, breadcrumbs, variant = 'primary' }: DocsHeaderProps) => {
  return (
    <>
      {variant === 'primary' ? (
        <div className={styles.rootPrimary}>
          {/* <TextLink className={styles.linkWrapper} variant="light" text={backText} to={backLink} /> */}
          <Breadcrumbs
            separator={<ChevronRight size={18} strokeWidth={3} color="#494B50" />}
            mt="xs"
          >
            {breadcrumbs.map((item, index) => (
              <TextLink text={item.title} to={item.href} key={index} variant="light" />
            ))}
          </Breadcrumbs>
          <div className={styles.primaryWrapper}>{text}</div>
        </div>
      ) : (
        <div className={styles.rootSecondary}>
          <Breadcrumbs
            separator={<ChevronRight size={18} strokeWidth={3} color="#494B50" />}
            mt="xs"
          >
            {breadcrumbs.map((item, index) => (
              <TextLink text={item.title} to={item.href} key={index} variant="light" />
            ))}
          </Breadcrumbs>
          <h1 className={styles.secondaryWrapper}>{text}</h1>
        </div>
      )}
    </>
  );
};

export default DocsHeader;
