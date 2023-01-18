import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="test-codebridge">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
