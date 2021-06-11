import React, { Component } from 'react';
import UserService from '../../services/UserService';
import { AiFillContacts, AiFillMail, AiOutlinePhone } from "react-icons/ai";
import { FaBirthdayCake, FaMap, FaKey  } from "react-icons/fa";
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
            <li> <AiFillContacts/> </li>
            <li> <AiFillMail /> </li>
            <li> <FaBirthdayCake/> </li>
            <li> <FaMap/> </li>
            <li> <AiOutlinePhone/> </li>
            <li> <FaKey/> </li>
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
