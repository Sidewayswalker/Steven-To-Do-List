import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import App from './components/App/App.jsx';
import store from './redux/store'; // Import the Redux store

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* Wrap your app with the Provider and pass the store */}
      <App />
    </Provider>
  </StrictMode>,
);
