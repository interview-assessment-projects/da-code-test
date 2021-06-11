import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

const Profile = () => (
  <div className="Profile">
    <h1>Profile Component</h1>
    <div className="profile-img"></div>
    <div className="desc-icons"></div>
    <div className="desc-paragraph"></div>
  </div>
);

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
