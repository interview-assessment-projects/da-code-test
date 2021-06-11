import React from 'react';
import PropTypes from 'prop-types';
import './FormComp.css';

const Form = () => (
  <div className="Form">
    <h2>Contact Me</h2>
    <form>
      <input type="text" placeholder="Name"></input>
      <input type="email" placeholder="Email"></input>
      <input type="textarea" placeholder="How can I help?"></input>
      <input type="button" value="Submit"></input>
    </form>
  </div>
);

Form.propTypes = {};

Form.defaultProps = {};

export default Form;
