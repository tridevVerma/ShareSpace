import React from 'react';
import StyledHome from '../styles/pageStyles/StyledHome';
import { Post } from '../components';

const Home = () => {
  return (
    <StyledHome>
      <section className="posts-container">
        <Post />
      </section>
    </StyledHome>
  );
};

export default Home;
