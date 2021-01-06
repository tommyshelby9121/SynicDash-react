import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import "./scss/main.scss";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('app')
);