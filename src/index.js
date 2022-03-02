import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './app/store';
import './index.css';
import reportWebVitals from './reportWebVitals';

const styles = {
    position: 'absolute',
    height: 50,
    bottom: 70,
    left: 10,
    backgroundColor: 'red',
};

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <SnackbarProvider
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        top: '100px',
                    }}
                    autoHideDuration={1500}
                    classeName={{ styles }}
                >
                    <App />
                </SnackbarProvider>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
