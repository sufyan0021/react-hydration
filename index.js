import express from 'express';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from './client/store.js';
import App from './client/App.jsx';

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
  const store = createStore();

  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  // Read state AFTER rendering, so it includes anything dispatched during render
  const preloadedState = store.getState();

  res.send(`<!doctype html>
<html>
  <body>
    <div id="root">${html}</div>
    <script>
      window.__PRELOADED_STATE__ = ${serialize(preloadedState)};
    </script>
    <script type="module" src="./client.js"></script>
  </body>
</html>`);
});

function serialize(state) {
  return JSON.stringify(state).replace(/</g, '\\u003c');
}

app.listen(3000, () => console.log('listening on 3000'));
