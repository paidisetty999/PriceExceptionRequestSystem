import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
export class QuoteRequest extends Component {
  render() {
    return (
      <div id="content">
        <h1>Quote Request</h1>
        <h2>New Quote</h2>
        <h2>Existing Quote</h2>
        <button>New Quote</button>
        <button>Existing Quote</button>
      </div>
    );
  }
}
