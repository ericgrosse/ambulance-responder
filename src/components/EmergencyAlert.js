import React from 'react';

const EmergencyAlert = ({ alertMessage }) => {
  return (
    <div className="emergency-alert">
      <h2>Emergency Alert!</h2>
      <p>{alertMessage}</p>
    </div>
  );
};

export default EmergencyAlert;
