import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { createStore } from './store.js';

const store = createStore(window.__PRELOADED_STATE__);

const domNode = document.getElementById('root');
hydrateRoot(
  domNode,
  <Provider store={store}>
    <App />
  </Provider>,
);
