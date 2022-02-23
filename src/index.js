import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { IconContext } from 'react-icons';
import { ThemeProvider } from 'styled-components';
import { theme } from './constants/Theme';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <IconContext.Provider
          value={{
            size: '1.3em',
            style: { verticalAlign: 'middle', marginRight: '8px' },
          }}
        >
          <Provider store={store}>
            <App />
          </Provider>
        </IconContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
