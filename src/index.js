import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18nextconfig';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navigation from './components/navigation';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <Router>
                <Navigation />
                <App />
            </Router>
        </ThemeProvider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
