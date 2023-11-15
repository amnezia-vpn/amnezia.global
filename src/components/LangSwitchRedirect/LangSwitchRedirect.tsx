import { useTranslation } from 'react-i18next';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { ReactNode, useEffect, useState } from 'react';
import isSupportedLang from '@src/shared/helpers/isSupportedLang';

interface Props {
  children: ReactNode;
}

export default function LangSwitchRedirect({ children }: Props) {
  const location = useLocation();
  // const navigate = useNavigate();
  const { i18n } = useTranslation();

  // const [holdRender, setHoldRender] = useState(true);

  // useEffect(() => {
  //   const resolvedLang = i18n.resolvedLanguage;
  //   const urlLang = location.pathname.split('/')[1];
  //   const remainingUrl = location.pathname;
  //
  //   if (!isSupportedLang(urlLang)) {
  //     // incorrect URL lang
  //     setHoldRender(false);
  //     navigate(`/${resolvedLang}${remainingUrl}`, { replace: true });
  //   } else if (resolvedLang !== urlLang) {
  //     // correct URL lang but unsynced
  //     // sync lang in URL and i18n. FIX things For browser history (back, forward)
  //     i18n.changeLanguage(urlLang);
  //   } else {
  //     setHoldRender(false);
  //   }
  // }, []);

  const handleRedirect = () => {
    const resolvedLang = i18n.resolvedLanguage;
    const urlLang = location.pathname.split('/')[1];
    const remainingUrl = location.pathname;

    if (!isSupportedLang(urlLang)) {
      // incorrect URL lang
      // navigate(`/${resolvedLang}${remainingUrl}`, { replace: true });
      return <Navigate to={`/${resolvedLang}${remainingUrl}`} replace />;
    }
    if (resolvedLang !== urlLang) {
      // correct URL lang but unsynced
      // sync lang in URL and i18n. FIX things For browser history (back, forward)
      i18n.changeLanguage(urlLang);
    }
    return <>{children}</>;
  };

  return <>{handleRedirect()}</>;
}
