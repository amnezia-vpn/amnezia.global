import { useTranslation } from 'react-i18next';
import SingleHostingInstruction from '@src/pages/instructions/ui/HostingInstructions/ui/SingleHostingInstruction/SingleHostingInstruction';
import AccordionItemV2 from '@src/shared/ui/AccordeonV2/ui/AccordionItemV2/AccordionItemV2';
import AccordionV2 from '@src/shared/ui/AccordeonV2/AccordionV2';
import usePageDecoration from '@src/shared/hooks/usePageDecoration/usePageDecoration';
import SeoUpdater from '@src/components/SeoUpdater/SeoUpdater';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import InstructionSkeleton from '@src/components/InstructionSkeleton/InstructionSkeleton';
import NotFoundWIdget from '@src/components/NotFoundWidget/NotFoundWIdget';
import styles from './HostingInstructions.module.scss';

const HostingInstructions = () => {
  usePageDecoration('dark');
  const location = useLocation();
  const { i18n } = useTranslation();
  const [data, setData] = useState<any>(null);
  const [status, setStatus] = useState<string>('loading'); // loading | ok | error
  const gitLink = `https://raw.githubusercontent.com/amnezia-vpn/amnezia.org-content/master/docs/${i18n.resolvedLanguage}/instructions/0_starter-guide/0_starter-guide.json`;

  useEffect(() => {
    const fetchData = async () => {
      setStatus('loading');

      const rawRes = await fetch(gitLink);

      if (rawRes.status !== 200) {
        setTimeout(() => {
          setStatus('error');
        }, 400);
      } else {
        const fetchedData = await rawRes.json();

        setData(fetchedData);

        setTimeout(() => {
          setStatus('ok');
        }, 400);
      }
    };

    fetchData();
  }, [location.pathname, i18n.resolvedLanguage]);

  return (
    <>
      {status === 'loading' && <InstructionSkeleton />}
      {status === 'error' && <NotFoundWIdget />}
      {status === 'ok' && (
        <>
          <SeoUpdater title={`Amnezia - ${data.h1}`} metaDesc={data.h1} />
          <div className={styles.root}>
            <h1>{data.h1}</h1>
            <h2>{data.h2}</h2>
            <p>{data.p1}</p>
            <blockquote>
              <p>{data.cardText}</p>
            </blockquote>
            <p>{data.p2}</p>
            <div className={styles.accordionWrapper}>
              <AccordionV2>
                {data.hostings.map((hosting: any) => (
                  <AccordionItemV2
                    key={hosting.link}
                    value={hosting.link}
                    label={<img src={hosting.logo} height="40px" width="auto" />}
                  >
                    <SingleHostingInstruction data={hosting} />
                  </AccordionItemV2>
                ))}
              </AccordionV2>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HostingInstructions;
