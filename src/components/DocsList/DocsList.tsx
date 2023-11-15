import DocsListItem from '@src/components/DocsList/ui/DocsListItem/DocsListItem';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import DocsListSkeleton from '@src/components/DocsList/ui/DocsListSkeleton/DocsListSkeleton';
import styles from './DocsList.module.scss';

interface DocsListProps {
  dataLink: string;
}

const DocsList = ({ dataLink }: DocsListProps) => {
  const { i18n } = useTranslation();
  const [tableOfContents, setTableOfContents] = useState<any[]>([]);
  const [status, setStatus] = useState('loading'); // loading | ok | error

  useEffect(() => {
    const fetchData = async () => {
      setStatus('loading');

      const res = await fetch(dataLink);

      if (res.status !== 200) {
        setTimeout(() => {
          setStatus('error');
        }, 400);
      } else {
        const data = await res.json();

        setTableOfContents(data);

        setTimeout(() => {
          setStatus('ok');
        }, 400);
      }

      // setTableOfContents([]);
      // return fetch(gitLink)
      //   .then((response) => response.json())
      //   .then((data) => {
      //     setTableOfContents(data);
      //   });
    };

    fetchData();
  }, [i18n.resolvedLanguage]);

  return (
    <div className={styles.root}>
      {status === 'ok' && (
        <div className={styles.wrapper}>
          {tableOfContents.map((el: any, i) => (
            <DocsListItem key={i} text={el.title} to={el.href} subtext={el.subtext} />
          ))}
        </div>
      )}
      {status === 'loading' && <DocsListSkeleton />}
    </div>
  );
};

export default DocsList;
