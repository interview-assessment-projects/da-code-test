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
      error: null,
      userInfoToDisplay: null
    }
  }

  // Gets called after first render
  componentDidMount() {
    // Get random user data
    UserService.getRandoUser()
      .then(result => {
        this.setState({
          isLoaded: true,
          userData: result.results[0],
          userInfoToDisplay: result.results[0].registered
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

  updateDisplayInfo(data) {
    console.log(data);
    this.setState({
      userInfoToDisplay: data
    })
  }

  render() {

    let info = JSON.stringify(this.state.userInfoToDisplay).split(",");

    if (this.state.error) {
      return <div>Error: {this.state.error.message}</div>;
    } else if (!this.state.isLoaded) {
      return (<p>Loading...</p>)
    } else {
      return (
        <div className="Profile">
        <div className="profile-img-cont">
          <img src={this.state.userData.picture.large} alt=""></img>
        </div>
        <div className="profile-icons">
          <ul>
            <li key="1" onClick={() => {this.updateDisplayInfo(this.state.userData.registered)}}> <AiFillContacts/> </li>
            <li key="2" onClick={() => {this.updateDisplayInfo(this.state.userData.email)}}> <AiFillMail /> </li>
            <li key="3" onClick={() => {this.updateDisplayInfo(this.state.userData.dob)}}> <FaBirthdayCake/> </li>
            <li key="4" onClick={() => {this.updateDisplayInfo(this.state.userData.location)}}> <FaMap/> </li>
            <li key="5" onClick={() => {this.updateDisplayInfo(this.state.userData.cell)}}> <AiOutlinePhone/> </li>
            <li key="6" onClick={() => {this.updateDisplayInfo(this.state.userData.login.username)}}> <FaKey/> </li>
          </ul>
        </div>
        <div className="profile-paragraph">
          <h1>
            {this.state.userData.name.title}&nbsp;
            {this.state.userData.name.first}&nbsp;
            {this.state.userData.name.last}
          </h1>
          <div>
            <p>
              {info.map((item) => {
                  return (
                      <span> {item} <br/></span>
                  )})
              }
          </p>

          </div>
        </div>
      </div>
      )
    }
  }
}

export default Profile;
