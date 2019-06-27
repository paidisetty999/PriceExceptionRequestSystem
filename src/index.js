import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import {ExistingCustomerForm} from './ExistingCustomerForm.js';
import {NewCustomerForm} from './NewCustomerForm.js';
import {QuoteRequest} from './QuoteRequest.js';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/ExistingCustomerForm" component={ExistingCustomerForm} />
        <Route path="/NewCustomerForm" component={NewCustomerForm} />
        <Route path="/QuoteRequest" component={QuoteRequest} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
