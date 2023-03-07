import React, { useState } from 'react';

const EmergencyRequest = ({ onSubmit }) => {
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ location, description });
    setLocation('');
    setDescription('');
  };

  return (
    <form className="emergency-form" onSubmit={handleSubmit}>
      <h2>Emergency Request</h2>
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmergencyRequest;
