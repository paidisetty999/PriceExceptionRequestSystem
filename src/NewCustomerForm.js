import React from "react";
import {Link} from "react-router-dom";

export class NewCustomerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Address: "",
      TelephoneNumber: "",
      Email: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.name]: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />{" "}
            <br />
          </label>
          <label>
            Address:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />{" "}
            <br />
          </label>
          <label>
            Telephone Number:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <Link to="/QuoteRequest"><button>Quote Request</button></Link> 
        </form>
      </div>
    );
  }
}
