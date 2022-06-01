import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18nextconfig';
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import History from "./views/history";
import Words from "./views/words";
import Settings from "./views/settings";
import Navigation from "./components/navigation";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/*<Router>*/}
          <App/>
          {/*<Navigation />*/}
      {/*</Router>*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
