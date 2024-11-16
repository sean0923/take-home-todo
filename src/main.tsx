import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ReactQueryProvider } from './providers/ReactQueryProvider.tsx';
import { App } from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactQueryProvider>
      <App />
    </ReactQueryProvider>
  </StrictMode>
);
