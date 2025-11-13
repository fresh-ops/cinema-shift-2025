import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/index.css';
import App from '@/app/App.tsx';

const appContainer = document.getElementById('root');

if (!appContainer) {
  throw new Error('No element with id "root". Check HTML');
}

createRoot(appContainer).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
