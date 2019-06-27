import React from 'react';

import './App.css';
import { NewCustomerForm } from "./NewCustomerForm.js";
import { ExistingCustomerForm } from "./ExistingCustomerForm.js";
import {Link} from "react-router-dom";

function App() {
  return (
<div className="App">
<h1>QMS Price Exception Request System</h1>
        <h2>Customer Input</h2>
        <Link to="/NewCustomerForm"><button>New Customer Form</button></Link> 
        <Link to="/ExistingCustomerForm"><button>Existing Customer Form</button></Link>     
    </div>    

  );
}

export default App;
