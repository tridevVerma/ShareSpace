import React, { useState, useEffect } from 'react';
import StyledSettings from '../styles/pageStyles/StyledSettings';
import useInput from '../hooks/useInput';
import { useAuth } from '../hooks/useProvideAuth';
import Loader from '../components/Loader';
import { useNavigate } from 'react-router-dom';
import { getAge, formatBirthday } from '../utils';
import Freinds from '../components/Freinds';
import MenuBox from '../components/MenuBox';
import getImage from '../api/v1/getImage';

const genderOptions = [
  { value: 'Male' },
  { value: 'Female' },
  { value: 'Other' },
];

const Settings = ({ notify }) => {
  const auth = useAuth();
  const navigate = useNavigate();

  const email = useInput('');
  const firstname = useInput('');
  const lastname = useInput('');
  const nickname = useInput('');
  const phone = useInput('');
  const gender = useInput(auth.user?.gender);
  const dob = useInput('');
  const city = useInput('');
  const country = useInput('');
  const [coverImage, setCoverImage] = useState();
  const [avatarImage, setAvatarImage] = useState();
  const [uploadingNow, setUploadingNow] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [savingProfile, setSavingProfile] = useState(false);
  const [freindsList, setFreindsList] = useState([]);

  const handleEdit = (e) => {
    let activeEditBtn = document.querySelector(
      '.main-container > .main-view > .profile-view > ul > .editable'
    );
    activeEditBtn?.classList.remove('editable');
    e.currentTarget.parentElement.classList.add('editable');
  };

  const updateProfile = async (e) => {
    e.preventDefault();
    if (auth.user) {
      setSavingProfile(true);

      const userData = {};

      const formBody = new FormData(e.target);
      formBody.forEach((value, key) => {
        userData[key] = value;
      });

      const result = await auth.updateUser(userData);
      if (result.success) {
        notify('Successfully Update !!', 'success');
      } else {
        notify(result.message, 'error');
      }
      setSavingProfile(false);
      return;
    }

    navigate('/signin');
    setSavingProfile(false);
  };

  const toggleLock = async () => {
    setSavingProfile(true);
    const response = await auth.toggleProfileLocking();
    if (response.success) {
      notify(
        auth.user.lockProfile ? 'profile unlocked !!' : 'profile locked !!',
        'success'
      );
    } else {
      notify(response.message, 'error');
    }
    setSavingProfile(false);
  };

  const showModal = (type) => {
    setUploadingNow(type);
    setOpenModal(true);
  };

  const hideModal = () => {
    setUploadingNow(null);
    setOpenModal(false);
  };

  const checkIfExist = (value) => {
    if (value) {
      return value;
    }
    return 'NA';
  };

  const uploadSingle = async (e, type) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const result = await auth.updateImage(type, formData);

    if (result.success) {
      notify(`successfully updated ${type} photo !!`, 'success');
    } else {
      notify(result.message, 'error');
    }
  };

  const getImageFromServer = async (imageLink, type) => {
    const image = await getImage(imageLink);

    if (type === 'cover') {
      setCoverImage(image);
    } else if (type === 'avatar') {
      setAvatarImage(image);
    }

    hideModal();
  };

  const brokenImage = (e, type) => {
    if (type === 'cover') {
      setCoverImage(require('../assets/images/generalUser.png'));
    } else if (type === 'avatar') {
      setAvatarImage(require('../assets/images/generalUser.png'));
    }
  };

  const getFreindsAvatarsFromServer = async (imageLink) => {
    const imageURL = await getImage(imageLink);
    if (!imageURL) {
      notify("Can't get images", 'error');
      return null;
    }
    return imageURL;
  };

  const getFreinds = async () => {
    const freindsArray = await Promise.all(
      auth.user?.freinds?.map(async (frData) => {
        return {
          ...frData.freind,
          avatar: await getFreindsAvatarsFromServer(frData.freind.avatar),
        };
      })
    );
    setFreindsList(freindsArray);
  };

  useEffect(() => {
    console.log('use-effect');
    if (auth.user) {
      getImageFromServer(auth.user.cover, 'cover');
      getImageFromServer(auth.user.avatar, 'avatar');
      getFreinds();
    }
  }, [auth.user]);

  return (
    <StyledSettings>
      <div className="banner-container">
        <img
          src={coverImage}
          alt="profile-background"
          id="cover-photo"
          onError={(e) => brokenImage(e, 'cover')}
        />
        {!openModal && (
          <button className="change-cover" onClick={() => showModal('cover')}>
            Upload Cover
          </button>
        )}

        {openModal && (
          <div className="modal">
            <button onClick={hideModal}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="form-container">
              <h1>Upload {uploadingNow} Photo</h1>
              <form
                action="/"
                onSubmit={(e) => uploadSingle(e, uploadingNow)}
                encType="multipart/form-data"
              >
                <input type="file" name={uploadingNow} />
                <button type="submit">Upload</button>
              </form>
            </div>
          </div>
        )}
      </div>
      <div className="heading">
        <div className="avatar-container" onClick={() => showModal('avatar')}>
          <img
            src={avatarImage}
            alt="avatar"
            onError={(e) => brokenImage(e, 'avatar')}
          />
        </div>
        <div className="name-container">
          <h1>
            {checkIfExist(auth.user?.firstname) +
              ' ' +
              checkIfExist(auth.user?.lastname)}
          </h1>
          <p>
            <span>
              <i className="fa-regular fa-circle-dot"></i>
              {getAge(auth.user?.dob)} years
            </span>
            <span>
              <i className="fa-solid fa-phone"></i>
              {checkIfExist(auth.user?.phone)}
            </span>
            <span>
              <i className="fa-solid fa-location-dot"></i>
              {checkIfExist(auth.user?.city) +
                ', ' +
                checkIfExist(auth.user?.country)}
            </span>
          </p>
        </div>

        <div className="info-lock">
          <button onClick={toggleLock} disabled={savingProfile}>
            {auth.user?.lockProfile ? (
              <i className="fa-solid fa-lock-open"></i>
            ) : (
              <i className="fa-solid fa-lock"></i>
            )}

            <span>
              {auth.user?.lockProfile ? 'Unlock' : 'Lock'} Your Profile
            </span>
          </button>
        </div>
      </div>
      <div className="main-container">
        <MenuBox />
        <div className="main-view">
          <div className="profile-view">
            {savingProfile ? (
              <Loader bg="#fcfcfd" color="#1877f2" />
            ) : (
              <ul>
                <li className="edit email">
                  <h1>Email</h1>
                  <h2>{checkIfExist(auth.user?.email)}</h2>
                  <button onClick={handleEdit}>
                    <i className="fa-solid fa-pen-to-square"></i>
                    <span>Edit</span>
                  </button>

                  <form
                    action="/"
                    className="edit-form"
                    onSubmit={updateProfile}
                  >
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
                  <h2>
                    {checkIfExist(auth.user?.firstname) +
                      ' ' +
                      checkIfExist(auth.user?.lastname)}
                  </h2>
                  <button onClick={handleEdit}>
                    <i className="fa-solid fa-pen-to-square"></i>
                    <span>Edit</span>
                  </button>
                  <form
                    action="/"
                    className="edit-form"
                    onSubmit={updateProfile}
                  >
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
                  <h2>{checkIfExist(auth.user?.nickname)}</h2>
                  <button onClick={handleEdit}>
                    <i className="fa-solid fa-pen-to-square"></i>
                    <span>Edit</span>
                  </button>
                  <form
                    action="/"
                    className="edit-form"
                    onSubmit={updateProfile}
                  >
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
                  <h2>{checkIfExist(auth.user?.phone)}</h2>
                  <button onClick={handleEdit}>
                    <i className="fa-solid fa-pen-to-square"></i>
                    <span>Edit</span>
                  </button>
                  <form
                    action="/"
                    className="edit-form"
                    onSubmit={updateProfile}
                  >
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
                  <h2>{checkIfExist(auth.user?.gender)}</h2>
                  <button onClick={handleEdit}>
                    <i className="fa-solid fa-pen-to-square"></i>
                    <span>Edit</span>
                  </button>
                  <form
                    action="/"
                    className="edit-form"
                    onSubmit={updateProfile}
                  >
                    <select id="gender" name="gender" {...gender}>
                      {genderOptions.map((gen) => {
                        return (
                          <option {...gen} key={gen.value}>
                            {gen.value}
                          </option>
                        );
                      })}
                    </select>
                    <button type="submit">Submit</button>
                  </form>
                </li>

                <li className="edit dob">
                  <h1>Birthday</h1>
                  <h2>{formatBirthday(auth.user?.dob)}</h2>
                  <button onClick={handleEdit}>
                    <i className="fa-solid fa-pen-to-square"></i>
                    <span>Edit</span>
                  </button>
                  <form
                    action="/"
                    className="edit-form"
                    onSubmit={updateProfile}
                  >
                    <input type="date" name="dob" id="dob" {...dob} />
                    <button type="submit">Submit</button>
                  </form>
                </li>

                <li className="edit address">
                  <h1>Address</h1>
                  <h2>
                    {checkIfExist(auth.user?.city) +
                      ', ' +
                      checkIfExist(auth.user?.country)}
                  </h2>
                  <button onClick={handleEdit}>
                    <i className="fa-solid fa-pen-to-square"></i>
                    <span>Edit</span>
                  </button>
                  <form
                    action="/"
                    className="edit-form"
                    onSubmit={updateProfile}
                  >
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
                    <button type="submit">Submit</button>
                  </form>
                </li>
              </ul>
            )}
          </div>
        </div>

        <Freinds type="freinds" users={freindsList} />
      </div>
    </StyledSettings>
  );
};

export default Settings;
