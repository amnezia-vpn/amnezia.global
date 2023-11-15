import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useTranslation } from 'react-i18next';
import remarkGfm from 'remark-gfm';
import MdStyledContainer from '@src/components/MdStyledContainer/MdStyledContainer';

const FaqMd = () => {
  const { i18n } = useTranslation();

  const [mdData, setMdData] = useState('');

  useEffect(() => {
    const gitLink = `https://raw.githubusercontent.com/Aftershock669/amnezia-open-docs/main/docs/${i18n.resolvedLanguage}/faq/faq.md`;
    const fetchData = async (url: string, setter: any) => {
      // setStatus('loading');

      const rawRes = await fetch(url);

      if (rawRes.status !== 200) {
        setTimeout(() => {
          // setStatus('error');
        }, 400);
      } else {
        const text = await rawRes.text();

        setter(text);

        setTimeout(() => {
          // setStatus('ok');
        }, 400);
      }
    };

    fetchData(gitLink, setMdData);
  }, [i18n.resolvedLanguage]);

  return (
    <MdStyledContainer>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{mdData}</ReactMarkdown>
    </MdStyledContainer>
  );
};

export default FaqMd;
