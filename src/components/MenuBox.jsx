import React from 'react';
import StyledMenuBox from '../styles/componentStyles/StyledMenuBox';

const MenuBox = () => {
  const changeView = (e) => {
    let activeBtn = document.querySelector('.sidebar > ul > li > .highlighted');
    activeBtn?.classList.remove('highlighted');
    e.currentTarget.classList.add('highlighted');
  };
  return (
    <StyledMenuBox className="left-sidebar sidebar">
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
    </StyledMenuBox>
  );
};

export default MenuBox;
