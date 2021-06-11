import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserService from '../../services/UserService';
import './Profile.css';

class Profile extends Component {

  constructor() {
    super();
    this.state = {
      isLoaded: false,
      userData: null,
      error: null
    }
  }

  // Gets called after first render
  componentDidMount() {
    // Get random user data
    UserService.getRandoUser()
      .then(result => {
        console.log(result)
        this.setState({
          isLoaded: true,
          userData: result
        })
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
  }

  render() {
    if (this.state.error) {
      return <div>Error: {this.state.error.message}</div>;
    } else if (!this.state.isLoaded) {
      return (<p>Loading...</p>)
    } else {
      return (
        <div className="Profile">
        <h1>Profile Component</h1>
        <div className="profile-img-cont">
          <img src={this.state.userData.results[0].picture.large} alt=""></img>
        </div>
        <div className="profile-icons">
          <ul>
            <li>icon 1</li>
            <li>icon 2</li>
            <li>icon 3</li>
            <li>icon 4</li>
            <li>icon 5</li>
            <li>icon 6</li>
          </ul>
        </div>
        <div className="profile-paragraph">
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt msollit anim id est laborum."</p>
        </div>
      </div>
      )
    }
  }
}

export default Profile;
