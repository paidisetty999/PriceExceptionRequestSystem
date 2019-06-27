import React from "react";
export class ExistingCustomerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "Brian Johnson",
      Address: "2000 Roselle Road, Hoffman Estates, IL",
      TelephoneNumber: "847-221-2356",
      Email: "brianjohnson@yahoo.com"
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
              value={this.state.Name}
              onChange={this.handleChange}
            />{" "}
            <br />
          </label>
          <label>
            Address:
            <input
              type="text"
              value={this.state.Address}
              onChange={this.handleChange}
            />{" "}
            <br />
          </label>
          <label>
            Telephone Number:
            <input
              type="text"
              value={this.state.TelephoneNumber}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              value={this.state.Email}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
