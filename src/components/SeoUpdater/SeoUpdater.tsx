import { Helmet } from 'react-helmet';
import localesList from '@src/shared/config/i18n/localesList';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface SeoUpdaterProps {
  title: string;
  metaDesc?: string;
  hrefLang?: boolean;
}

const SeoUpdater = ({ title, metaDesc, hrefLang = true }: SeoUpdaterProps) => {
  const location = useLocation();

  return (
    <Helmet defer={false}>
      <link rel="canonical" href={`https://amnezia.org${location.pathname}`} />
      <title>{title}</title>
      {metaDesc ? <meta name="description" content={metaDesc} /> : undefined}
      {hrefLang
        ? localesList.map((locale) => (
            <link
              key={locale.code}
              rel="alternate"
              hrefLang={locale.code}
              href={`https://amnezia.org/${locale.code}/${location.pathname
                .split('/')
                .splice(2)
                .join('/')}`.replace(/\/$/, '')}
            />
          ))
        : undefined}
    </Helmet>
  );
};

export default SeoUpdater;
