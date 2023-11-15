import { useTranslation } from 'react-i18next';
import { Navigate, Outlet, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function IndexLangSwitch() {
  // detects language and modifies root URL
  // / -> /en

  const { i18n } = useTranslation();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate(`/${i18n.resolvedLanguage}`, { replace: true });
  // }, []);
  // return <Outlet />;
  return <Navigate to={`${i18n.resolvedLanguage}`} replace />;
}
