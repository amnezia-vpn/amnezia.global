// import reactLogo from '@assets/react.svg';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import routerConfig from '@src/providers/router/routerConfig';
import '@src/styles/index.scss';
import '@src/shared/config/i18n/i18n';

function App() {
  return (
    <div className="app">
      {/* <Suspense fallback="loading translation..."> */}
      <Suspense>
        <RouterProvider router={routerConfig} />
      </Suspense>
    </div>
  );
}

export default App;
