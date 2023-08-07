import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import './index.css';
import ChatHistoryProvider from './contexts/chatHistoryContext.tsx';
import TranslationProvider from './contexts/translationContext.tsx';

const local = navigator.language;
ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <TranslationProvider local={local}>
        <ChatHistoryProvider>
          <App />
        </ChatHistoryProvider>
      </TranslationProvider>
    </React.StrictMode>
  </BrowserRouter>,
);
