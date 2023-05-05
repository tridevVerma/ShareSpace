import React, { useState, useEffect } from 'react';
import StyledHome from '../styles/pageStyles/StyledHome';
import { Post } from '../components';
import Freinds from '../components/Freinds';
import AllUsers from '../components/AllUsers';
import { getAllUsers } from '../api/v1';
import getImage from '../api/v1/getImage';
import { useAuth } from '../hooks';

const Home = ({ notify }) => {
  const auth = useAuth();
  const [allUsers, setAllUsers] = useState([]);
  const [freindsList, setFreindsList] = useState([]);
  const getFreinds = () => {
    const data = auth.user?.freinds?.map((user) => {
      if (user.senderStatus === 3 && user.receiverStatus === 3) {
        return user.receiver;
      }
    });
    setFreindsList(data);
    console.log(auth.user?.freinds);
  };

  const getImageFromServer = async (imageLink) => {
    const imageURL = await getImage(imageLink);
    if (!imageURL) {
      notify("Can't get images", 'error');
      return null;
    }
    return imageURL;
  };

  const gettingUsers = async () => {
    const response = await getAllUsers();

    if (response.success) {
      const allUsers = await Promise.all(
        response.data.allUsers.map(async (user) => {
          return {
            ...user,
            avatar: await getImageFromServer(user.avatar),
          };
        })
      );

      console.log(allUsers);
      setAllUsers(allUsers);
    }
    if (!response.success) {
      notify(response.message, 'error');
    }
  };

  useEffect(() => {
    gettingUsers();
    getFreinds();
  }, []);

  return (
    <StyledHome>
      <section className="posts-container">
        <Post />
      </section>

      <Freinds users={freindsList} />
      <AllUsers users={allUsers} />
    </StyledHome>
  );
};

export default Home;
