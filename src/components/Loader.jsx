import React from 'react';
import StyledLoader from '../styles/componentStyles/StyledLoader';

const Loader = ({ bg, color }) => {
  return (
    <StyledLoader bg={bg} color={color}>
      <div className="spinner"></div>
    </StyledLoader>
  );
};

export default Loader;
