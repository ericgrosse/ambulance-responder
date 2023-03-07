import React from 'react';

const GeolocationButton = ({ onClick }) => {
  return (
    <button className="geolocation-button" onClick={onClick}>
      Get Geolocation
    </button>
  );
};

export default GeolocationButton;
