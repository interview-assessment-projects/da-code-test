import React, { Component } from 'react';
import FormService from '../../services/FormService';
import './FormComp.css';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // set class state vars with change from UI
  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    console.log(event)
    this.setState({[nam]: val});
  }

  // handle form submission
  handleSubmit(event) {
    alert('A message was submitted!');
    FormService.sendFrom(this.state.name, this.state.email, this.state.message);
    // event.preventDefault();
  }

  render () {
    return (
      <div className="Form">
      <h2>Contact Me</h2>
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={this.handleChange}
          required>
        </input>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={this.handleChange}
          required>
        </input>
        <input
          type="textarea"
          name="message"
          placeholder="How can I help?"
          onChange={this.handleChange}
          required>
        </input>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
    )
  }
}

export default Form;
