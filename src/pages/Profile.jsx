import React, { useState, useEffect } from 'react';
import StyledProfile from '../styles/pageStyles/StyledProfile';
import { useParams } from 'react-router-dom';
import { getAge } from '../utils';
import Freinds from '../components/Freinds';
import MenuBox from '../components/MenuBox';
import { ProfileView } from '../components/views';
import { getProfileInfo } from '../api/v1';
import getImage from '../api/v1/getImage';
import { useAuth } from '../hooks';

const Profile = ({ notify }) => {
  const auth = useAuth();
  const [freindshipStatus, setFreindshipStatus] = useState(0);
  const [profileUser, setProfileUser] = useState(null);

  const params = useParams();

  const fetchProfile = async () => {
    const response = await getProfileInfo(params.userId);
    if (response.success) {
      const profileUserData = {
        ...response.data.profileData,
        avatar: await getImage(response.data.profileData.avatar),
        cover: await getImage(response.data.profileData.cover),
      };

      setProfileUser(profileUserData);
    } else {
      notify(response.message, 'error');
      setProfileUser(null);
    }
  };

  const toggleFreinds = async (e) => {
    const result = await auth.addFreind(profileUser._id);
    if (result.success) {
      await fetchProfile();
    }
  };

  const checkIfExist = (value) => {
    if (value) {
      return value;
    }
    return 'NA';
  };

  const brokenImage = (e) => {
    e.currentTarget.src = require('../assets/images/generalUser.png');
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <StyledProfile>
      <div className="banner-container">
        <img
          src={profileUser?.cover}
          alt="profile-background"
          onError={brokenImage}
        />
      </div>
      <div className="heading">
        <div className="avatar-container">
          <img src={profileUser?.avatar} alt="avatar" onError={brokenImage} />
        </div>
        <div className="name-container">
          <h1>
            {checkIfExist(profileUser?.firstname) +
              ' ' +
              checkIfExist(profileUser?.lastname)}
          </h1>
          <p>
            <span>
              <i className="fa-regular fa-circle-dot"></i>
              {getAge(profileUser?.dob)} years
            </span>
            {!profileUser?.lockProfile && (
              <span>
                <i className="fa-solid fa-phone"></i>
                {checkIfExist(profileUser?.phone)}
              </span>
            )}

            <span>
              <i className="fa-solid fa-location-dot"></i>
              {checkIfExist(profileUser?.city) +
                ', ' +
                checkIfExist(profileUser?.country)}
            </span>
          </p>
        </div>

        <div className="make-freinds">
          <button onClick={toggleFreinds}>
            {freindshipStatus === 3 ? (
              <i className="fa-solid fa-user-xmark"></i>
            ) : (
              <i className="fa-solid fa-user-plus"></i>
            )}

            <span>{freindshipStatus === 3 ? 'Remove' : 'Add'} Freind</span>
          </button>
        </div>
      </div>
      <div className="main-container">
        <MenuBox />
        <div className="main-view">
          {profileUser?.lockProfile ? (
            <div className="locked-profile">
              <i className="fa-solid fa-lock"></i>
              <h1>Profile is locked</h1>
            </div>
          ) : (
            <ProfileView user={profileUser} />
          )}
        </div>

        <Freinds type="freinds" users={[]} />
      </div>
    </StyledProfile>
  );
};

export default Profile;
