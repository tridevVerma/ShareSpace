import React from 'react';
import StyledFreinds from '../styles/componentStyles/StyledFreinds';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks';

const AllUsers = ({ users }) => {
  const auth = useAuth();
  const brokenImage = (e) => {
    e.currentTarget.src = require('../assets/images/generalUser.png');
  };
  return (
    <StyledFreinds>
      <div className="heading">
        <h1>All Users</h1>
      </div>
      <div className="freinds-container">
        <ul>
          {users
            .filter((user) => {
              if (user._id === auth.user?._id) {
                return false;
              }
              return true;
            })
            .map((user) => {
              return (
                <li key={user._id}>
                  <NavLink
                    to={{
                      pathname: `/user/${user._id}`,
                      state: { user: user._id },
                    }}
                  >
                    <div className="avatar-container">
                      <img
                        src={user.avatar}
                        alt="avatar"
                        onError={brokenImage}
                      />
                    </div>
                    <div className="info">
                      <h2>{`${user.firstname} ${user.lastname}`}</h2>
                      <p>{`${user.email}`}</p>
                    </div>
                  </NavLink>

                  <button>
                    <i className="fa-solid fa-user-plus"></i>
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </StyledFreinds>
  );
};

export default AllUsers;
