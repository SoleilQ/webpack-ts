import { createRoot } from 'react-dom/client';
import PageErrorFallback from '@layouts/BeautifulError';
import ErrorBoundary from '@layouts/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import App from '@pages/App';
import './style.css';
// if (process.env.NODE_ENV === 'development') {
//   require('./wdyr');
// }
import './wdyr';
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(
  <ErrorBoundary fallbackRender={PageErrorFallback}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>
);
