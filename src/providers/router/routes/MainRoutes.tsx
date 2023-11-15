// import { Navigate, RouteObject } from 'react-router-dom';
// import Layout from '@src/layouts/Layout/Layout';
// import HostingPage from '@src/pages/main/HostingPage';
// import DownloadsPage from '@src/pages/downloads/DownloadsPage';
// import AboutPage from '@src/pages/about/AboutPage';
// import SupportPage from '@src/pages/support/SupportPage';
// import InstructionsPage from '@src/pages/instructions/InstructionsPage';
// import Instruction from '@src/pages/instructions/ui/DocsArticleMd/DocsArticleMd';
// import HostingInstructions from '@src/pages/instructions/ui/HostingInstructions/HostingInstructions';

// const MainRoutes: RouteObject = {
//   element: <Layout />,
//   path: '/:lang',
//   children: [
//     {
//       index: true,
//       element: <HostingPage />,
//     },
//     {
//       path: 'downloads',
//       element: <DownloadsPage />,
//     },
//     {
//       path: 'support',
//       element: <SupportPage />,
//     },
//     {
//       path: 'about',
//       element: <AboutPage />,
//     },
//     {
//       path: 'instructions',
//       element: <InstructionsPage />,
//     },
//     {
//       path: 'instructions/starter-guide',
//       element: <HostingInstructions />,
//     },
//     {
//       path: 'instructions/:id',
//       element: <Instruction />,
//     },
//   ],
// };

// const MainRoutes: RouteObject = {
//   element: <Layout />,
//   path: '/',
//   children: [
//     {
//       index: true,
//       element: <Navigate to="/en" replace />,
//     },
//     {
//       path: '/:lang',
//       element: <HostingPage />,
//     },
//     {
//       path: ':lang/downloads',
//       element: <DownloadsPage />,
//     },
//     {
//       path: ':lang/support',
//       element: <SupportPage />,
//     },
//     {
//       path: ':lang/about',
//       element: <AboutPage />,
//     },
//     {
//       path: ':lang/instructions',
//       element: <InstructionsPage />,
//     },
//     {
//       path: ':lang/instructions/starter-guide',
//       element: <HostingInstructions />,
//     },
//     {
//       path: ':lang/instructions/:id',
//       element: <Instruction />,
//     },
//   ],
// };
//
// export default MainRoutes;
