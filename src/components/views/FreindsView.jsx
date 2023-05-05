import React from 'react';
import StyledFreindsView from '../../styles/componentStyles/StyledFreindsView';

const FreindsView = () => {
  return (
    <StyledFreindsView>
      <ul>
        <li>
          <div className="avatar-container">
            <img src={require('../../assets/images/avatar.png')} alt="avatar" />
          </div>
          <div className="info">
            <h2>Tridev Verma ( Saurav )</h2>
            <p>Delhi, India</p>
          </div>

          <div className="birthday">
            <i class="fa-solid fa-cake-candles"></i>
            <p>16 Jul 2001</p>
          </div>
          <button>
            <i class="fa-solid fa-eye"></i>
          </button>
        </li>

        <li>
          <div className="avatar-container">
            <img src={require('../../assets/images/google.png')} alt="avatar" />
          </div>
          <div className="info">
            <h2>Saurav Verma ( Nihal )</h2>
            <p>Bihar, India</p>
          </div>

          <div className="birthday">
            <i className="fa-solid fa-cake-candles"></i>
            <p>25 Jul 2002</p>
          </div>
          <button>
            <i className="fa-solid fa-eye"></i>
          </button>
        </li>
      </ul>
    </StyledFreindsView>
  );
};

export default FreindsView;
