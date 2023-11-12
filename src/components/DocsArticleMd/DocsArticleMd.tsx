/* eslint-disable import/no-extraneous-dependencies,import/no-absolute-path */
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import MdStyledContainer from '@src/components/MdStyledContainer/MdStyledContainer';
import TextLink from '@src/shared/ui/TextLink/TextLink';
import usePageDecoration from '@src/shared/hooks/usePageDecoration/usePageDecoration';
import InstructionSkeleton from '@src/components/InstructionSkeleton/InstructionSkeleton';
import { Helmet } from 'react-helmet';
import NotFoundWIdget from '@src/components/NotFoundWidget/NotFoundWIdget';
import SeoUpdater from '@src/components/SeoUpdater/SeoUpdater';

function RouterLink({ children, href }: any) {
  return href.match(/^\//) ? (
    <TextLink variant="underline" text={children} to={href} />
  ) : (
    <TextLink variant="underline" text={children} to={href} openInNewTab />
  );
  // return <TextLink variant="underline" text={children} to={href} openInNewTab />;
}

interface AppInstructionMdProps {
  docUrl: string;
}

const DocsArticleMd = ({ docUrl = '' }: AppInstructionMdProps) => {
  usePageDecoration('dark');
  const location = useLocation();
  const { i18n } = useTranslation();

  const [read, setRead] = useState('');
  const [status, setStatus] = useState<string>('loading'); // loading | ok | error
  // const [isLoading, setIsLoading] = useState(true);
  const [instrTitle, setInstrTitle] = useState('');

  const handleTitle = (title: string) => {
    setInstrTitle(`Amnezia - ${title}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      setStatus('loading');

      const rawRes = await fetch(docUrl);

      if (rawRes.status !== 200) {
        setTimeout(() => {
          setStatus('error');
        }, 400);
      } else {
        const text = await rawRes.text();

        setRead(text);
        const reg = text.match(/^(\S+)\s(.*)/);
        if (reg) handleTitle(reg.slice(1)[1]);

        setTimeout(() => {
          setStatus('ok');
        }, 400);
      }
    };

    fetchData();

    // FETCH FROM DYNAMIC IMPORT FS
    // import('/src/docs/ru/instructions/auto-install/auto-install.md').then((res) => {
    //   fetch(res.default)
    //     .then((response) => response.text())
    //     .then((text) => {
    //       setRead(text);
    //       setStatus('ok');
    //     });
    // });

    // FETCH FROM PUBLIC
    // fetch(docUrl)
    //   .then((response) => response.text())
    //   .then((text) => {
    //     setRead(text);
    //     setStatus('ok');
    //   });
  }, [location.pathname, i18n.resolvedLanguage]);

  return (
    <>
      <SeoUpdater title={instrTitle} />
      <Helmet defer={false}>
        <title>{instrTitle}</title>
      </Helmet>
      {status === 'loading' && <InstructionSkeleton />}
      {status === 'error' && <NotFoundWIdget />}
      {status === 'ok' && (
        <MdStyledContainer>
          <ReactMarkdown components={{ a: RouterLink }} remarkPlugins={[remarkGfm]}>
            {read}
          </ReactMarkdown>
        </MdStyledContainer>
      )}
    </>
  );
};

export default DocsArticleMd;
