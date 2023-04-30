import React, { useState } from 'react';
import StyledProfile from '../styles/pageStyles/StyledProfile';
import useInput from '../hooks/useInput';

const user = {
  email: 'tv072000@gmail.com',
  name: 'Tridev Verma',
  nickname: 'Saurav',
  phone: '1112223334',
  gender: 'other',
  birthday: '16 july 2001',
  address: 'Delhi, India',
};

const genderOptions = [
  { value: 'Male' },
  { value: 'Female' },
  { value: 'Other' },
];

const Profile = () => {
  const email = useInput('');
  const firstname = useInput('');
  const lastname = useInput('');
  const nickname = useInput('');
  const phone = useInput('');
  const gender = useInput('Other');
  const dob = useInput('');
  const city = useInput('');
  const country = useInput('');
  const [lockProfile, setLockProfile] = useState(true);

  const changeView = (e) => {
    let activeBtn = document.querySelector('.sidebar > ul > li > .highlighted');
    activeBtn?.classList.remove('highlighted');
    e.currentTarget.classList.add('highlighted');
  };

  const handleEdit = (e) => {
    let activeEditBtn = document.querySelector(
      '.main-container > .main-view > .profile-view > ul > .editable'
    );
    activeEditBtn?.classList.remove('editable');
    e.currentTarget.parentElement.classList.add('editable');
  };

  const toggleLock = (e) => {
    setLockProfile((prev) => !prev);
  };

  return (
    <StyledProfile>
      <div className="banner-container">
        <img
          src={require('../assets/images/profile-bg.jpg')}
          alt="profile-background"
        />

        <button className="change-cover">Upload Cover</button>
      </div>
      <div className="heading">
        <div className="avatar-container">
          <img src={require('../assets/images/profile.jpg')} alt="avatar" />
        </div>
        <div className="name-container">
          <h1>{'Tridev Verma'}</h1>
          <p>
            <span>
              <i className="fa-solid fa-phone"></i>
              {'1112223334'}
            </span>
            <span>
              <i className="fa-solid fa-location-dot"></i>
              {'Delhi, India'}
            </span>
          </p>
        </div>

        <div className="info-lock">
          <button onClick={toggleLock}>
            {lockProfile ? (
              <i className="fa-solid fa-lock"></i>
            ) : (
              <i className="fa-solid fa-lock-open"></i>
            )}

            <span>{lockProfile ? 'Lock' : 'Unlock'} Your Profile</span>
          </button>
        </div>
      </div>
      <div className="main-container">
        <div className="left-sidebar sidebar">
          <ul>
            <li>
              <button onClick={changeView}>
                <i className="fa-solid fa-house"></i>
                <span>Home</span>
              </button>
            </li>
            <li>
              <button onClick={changeView}>
                <i className="fa-solid fa-user-group"></i>
                <span>Freinds</span>
              </button>
            </li>
            <li>
              <button onClick={changeView}>
                <i className="fa-solid fa-image"></i>
                <span>Images</span>
              </button>
            </li>
            <li>
              <button onClick={changeView}>
                <i className="fa-solid fa-film"></i>
                <span>Videos</span>
              </button>
            </li>
            <li>
              <button onClick={changeView}>
                <i className="fa-solid fa-photo-film"></i>
                <span>Feeds</span>
              </button>
            </li>
            <li>
              <button onClick={changeView} className="highlighted">
                <i className="fa-solid fa-user"></i>
                <span>Profile</span>
              </button>
            </li>
          </ul>
        </div>

        <div className="main-view">
          <div className="profile-view">
            <ul>
              <li className="edit email">
                <h1>Email</h1>
                <h2>{user.email}</h2>
                <button onClick={handleEdit}>
                  <i className="fa-solid fa-pen-to-square"></i>
                  <span>Edit</span>
                </button>

                <form action="/" className="edit-form">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter new email ..."
                    {...email}
                  />
                  <button type="submit">Submit</button>
                </form>
              </li>
              <li className="edit name">
                <h1>Name</h1>
                <h2>{user.name}</h2>
                <button onClick={handleEdit}>
                  <i className="fa-solid fa-pen-to-square"></i>
                  <span>Edit</span>
                </button>
                <form action="/" className="edit-form">
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="Enter your firstname ..."
                    {...firstname}
                  />
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Enter your lastname ..."
                    {...lastname}
                  />
                  <button type="submit">Submit</button>
                </form>
              </li>

              <li className="edit nickname">
                <h1>Nickname</h1>
                <h2>{user.nickname}</h2>
                <button onClick={handleEdit}>
                  <i className="fa-solid fa-pen-to-square"></i>
                  <span>Edit</span>
                </button>
                <form action="/" className="edit-form">
                  <input
                    type="text"
                    name="nickname"
                    id="nickname"
                    placeholder="Enter your nickname ..."
                    {...nickname}
                  />
                  <button type="submit">Submit</button>
                </form>
              </li>

              <li className="edit phone">
                <h1>Phone no</h1>
                <h2>{user.phone}</h2>
                <button onClick={handleEdit}>
                  <i className="fa-solid fa-pen-to-square"></i>
                  <span>Edit</span>
                </button>
                <form action="/" className="edit-form">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter your Phone no ..."
                    {...phone}
                  />
                  <button type="submit">Submit</button>
                </form>
              </li>

              <li className="edit gender">
                <h1>Gender</h1>
                <h2>{user.gender}</h2>
                <button onClick={handleEdit}>
                  <i className="fa-solid fa-pen-to-square"></i>
                  <span>Edit</span>
                </button>
                <form action="/" className="edit-form">
                  <select id="gender" name="gender" {...gender}>
                    {genderOptions.map((gen) => {
                      return (
                        <option {...gen} key={gen.value}>
                          {gen.value}
                        </option>
                      );
                    })}
                  </select>
                  <button>Submit</button>
                </form>
              </li>

              <li className="edit dob">
                <h1>Birthday</h1>
                <h2>{user.birthday}</h2>
                <button onClick={handleEdit}>
                  <i className="fa-solid fa-pen-to-square"></i>
                  <span>Edit</span>
                </button>
                <form action="/" className="edit-form">
                  <input type="date" name="dob" id="dob" {...dob} />
                  <button>Submit</button>
                </form>
              </li>

              <li className="edit address">
                <h1>Address</h1>
                <h2>{user.address}</h2>
                <button onClick={handleEdit}>
                  <i className="fa-solid fa-pen-to-square"></i>
                  <span>Edit</span>
                </button>
                <form action="/" className="edit-form">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Enter your city"
                    {...city}
                  />
                  <input
                    type="text"
                    name="country"
                    id="country"
                    placeholder="Enter your country"
                    {...country}
                  />
                  <button>Submit</button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </StyledProfile>
  );
};

export default Profile;
