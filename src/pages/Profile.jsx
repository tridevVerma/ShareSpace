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

const statusValue = ['Add Freind', 'Requested...', 'Pending...', 'Freinds'];

const Profile = ({ notify }) => {
  const auth = useAuth();
  const [freindshipStatus, setFreindshipStatus] = useState(0);
  const [profileUser, setProfileUser] = useState(null);
  const [freindsList, setFreindsList] = useState([]);

  const params = useParams();

  const getImageFromServer = async (imageLink) => {
    const imageURL = await getImage(imageLink);
    if (!imageURL) {
      notify("Can't get images", 'error');
      return null;
    }
    return imageURL;
  };

  function getStatus() {
    console.log(auth.user?.freinds);
    const currentStatus = auth.user?.freinds.find((frObject) => {
      if (frObject.freind === profileUser?._id) {
        return frObject.status;
      }
    });
    console.log('status', currentStatus);
    if (!currentStatus) {
      setFreindshipStatus(0);
      return;
    }

    setFreindshipStatus(currentStatus);
  }

  const fetchProfile = async () => {
    const response = await getProfileInfo(params.userId);
    if (response.success) {
      // Populate Profile user data
      const profileUserData = {
        ...response.data.profileData,
        avatar: await getImage(response.data.profileData.avatar),
        cover: await getImage(response.data.profileData.cover),
      };

      // Check freindship status among logged user and profile user

      auth.user?.freinds.forEach((frData) => {
        if (frData.freind?._id === profileUserData?._id) {
          setFreindshipStatus(frData.status);
          return;
        }
      });

      setProfileUser(profileUserData);

      // Populate profile user's freinds
      const freindsArray = await Promise.all(
        profileUserData?.freinds.map(async (frData) => {
          return {
            ...frData.freind,
            avatar: await getImageFromServer(frData.freind.avatar),
          };
        })
      );
      setFreindsList(freindsArray);
    } else {
      notify(response.message, 'error');
      setProfileUser(null);
    }
  };

  const toggleFreinds = async (e) => {
    let result;
    if (freindshipStatus === 0) {
      // add freind
      result = await auth.addFreind(profileUser._id);
    } else if (freindshipStatus === 1) {
      // cancel request
      result = await auth.rejectFreind(profileUser._id);
    } else if (freindshipStatus === 2) {
      result = await auth.acceptFreind(profileUser._id);
    } else if (freindshipStatus === 3) {
      result = await auth.rejectFreind(profileUser._id);
    }
    if (result.success) {
      getStatus();
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
  }, [auth.user]);

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
            {freindshipStatus === 3 && (
              <i className="fa-solid fa-user-xmark"></i>
            )}

            {freindshipStatus === 0 && (
              <i className="fa-solid fa-user-plus"></i>
            )}

            <span>{statusValue[freindshipStatus]}</span>
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

        <Freinds type="freinds" users={freindsList} />
      </div>
    </StyledProfile>
  );
};

export default Profile;
