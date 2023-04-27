import React from 'react';

const Image = ({ url }) => {
  return (
    <div style={{ width: '100%' }}>
      <img src={url} alt="" width="100%" />
    </div>
  );
};

export default Image;
