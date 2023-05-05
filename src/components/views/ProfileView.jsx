import React from 'react';
import StyledProfileView from '../../styles/componentStyles/StyledProfileView';
import { formatBirthday } from '../../utils';

const ProfileView = ({ user }) => {
  const checkIfExist = (value) => {
    if (value) {
      return value;
    }
    return 'NA';
  };
  return (
    <StyledProfileView className="profile-view">
      <ul>
        <li className="edit email">
          <h1>Email</h1>
          <h2>{checkIfExist(user?.email)}</h2>
        </li>
        <li className="edit name">
          <h1>Name</h1>
          <h2>
            {checkIfExist(user?.firstname) + ' ' + checkIfExist(user?.lastname)}
          </h2>
        </li>

        <li className="edit nickname">
          <h1>Nickname</h1>
          <h2>{checkIfExist(user?.nickname)}</h2>
        </li>

        <li className="edit phone">
          <h1>Phone no</h1>
          <h2>{checkIfExist(user?.phone)}</h2>
        </li>

        <li className="edit gender">
          <h1>Gender</h1>
          <h2>{checkIfExist(user?.gender)}</h2>
        </li>

        <li className="edit dob">
          <h1>Birthday</h1>
          <h2>{formatBirthday(user?.dob)}</h2>
        </li>

        <li className="edit address">
          <h1>Address</h1>
          <h2>
            {checkIfExist(user?.city) + ', ' + checkIfExist(user?.country)}
          </h2>
        </li>
      </ul>
    </StyledProfileView>
  );
};

export default ProfileView;
