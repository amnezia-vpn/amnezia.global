import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import Layout from '@src/layouts/Layout/Layout';
// import MainPage from '@src/pages/main/MainPage';
// import DownloadsPage from '@src/pages/downloads/DownloadsPage';
// import SupportPage from '@src/pages/support/SupportPage';
// import AboutPage from '@src/pages/about/AboutPage';
// import InstructionsPage from '@src/pages/instructions/InstructionsPage';
// import NotFoundPage from '@src/pages/notFound/NotFoundPage';
// import ErrorCodesLayout from '@src/layouts/ErrorCodesLayout/ErrorCodesLayout';

import IndexLangSwitch from '@src/components/IndexLangSwitch/IndexLangSwitch';
import LangSwitchRedirect from '@src/components/LangSwitchRedirect/LangSwitchRedirect';

const MainPage = lazy(() => import('@src/pages/main/MainPage'));
const DownloadsPage = lazy(() => import('@src/pages/downloads/DownloadsPage'));
const SupportPage = lazy(() => import('@src/pages/support/SupportPage'));
const AboutPage = lazy(() => import('@src/pages/about/AboutPage'));
const InstructionsPage = lazy(() => import('@src/pages/instructions/InstructionsPage'));
const TechFaqPage = lazy(() => import('@src/pages/techFaq/TechFaqPage'));
const LearnMorePage = lazy(() => import('@src/pages/learnMore/LearnMorePage'));
const TroubleshootingPage = lazy(() => import('@src/pages/troubleshooting/TroubleshootingPage'));
const TroubleshootingLayout = lazy(
  () => import('@src/layouts/TroubleshootingLayout/TroubleshootingLayout')
);
const NotFoundPage = lazy(() => import('@src/pages/notFound/NotFoundPage'));
const InstructionLayout = lazy(() => import('@src/layouts/InstructionLayout/InstructionLayout'));
const ErrorCodesPage = lazy(() => import('@src/pages/errorCodes/ErrorCodesPage'));
const ErrorCodesLayout = lazy(() => import('@src/layouts/ErrorCodesLayout/ErrorCodesLayout'));

export default createBrowserRouter([
  {
    element: <IndexLangSwitch />,
    path: '/',
  },
  {
    element: (
      <LangSwitchRedirect>
        <Layout />
      </LangSwitchRedirect>
    ),
    path: '/:lang',
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'downloads',
        element: <DownloadsPage />,
      },
      {
        path: 'support',
        element: <SupportPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'instructions',
        element: <InstructionsPage />,
      },
      {
        path: 'instructions/:instructionId',
        element: <InstructionLayout />,
      },
      {
        path: 'troubleshooting',
        element: <TroubleshootingPage />,
      },
      {
        path: 'troubleshooting/error-codes',
        element: <ErrorCodesPage />,
      },
      {
        path: 'troubleshooting/error-codes/:errCode',
        element: <ErrorCodesLayout />,
      },
      {
        path: 'troubleshooting/:articleId',
        element: <TroubleshootingLayout />,
      },
      {
        path: 'learn-more',
        element: <LearnMorePage />,
      },
      {
        path: 'tech-faq',
        element: <TechFaqPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
  // {
  //   element: <Outlet />,
  //   path: '/',
  //   children: [
  //     {
  //       path: '*',
  //       element: <NotFoundPage />,
  //     },
  //   ],
  // },
]);
