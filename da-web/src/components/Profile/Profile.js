import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

const Profile = () => (
  <div className="Profile">
    <h1>Profile Component</h1>
    <div className="profile-img-cont">
      <img src="" alt=""></img>
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
);

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
