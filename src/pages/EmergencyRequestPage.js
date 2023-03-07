import React from 'react';
import GeolocationButton from '../components/GeolocationButton';
import EmergencyAlert from '../components/EmergencyAlert';

const EmergencyRequestPage = () => {
  const [location, setLocation] = React.useState(null);
  const [showAlert, setShowAlert] = React.useState(false);

  const handleGeolocation = (position) => {
    setLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  };

  const handleAlertDismiss = () => {
    setShowAlert(false);
  };

  const handleAlertTrigger = () => {
    setShowAlert(true);
  };

  return (
    <div>
      <h1>Request Emergency Ambulance Services</h1>
      <GeolocationButton
        onGeolocation={handleGeolocation}
        onError={() => alert('Error: Could not retrieve location')}
      />
      {location && (
        <EmergencyAlert
          latitude={location.latitude}
          longitude={location.longitude}
          onDismiss={handleAlertDismiss}
          onTrigger={handleAlertTrigger}
        />
      )}
      {showAlert && (
        <div className="alert alert-danger" role="alert">
          Emergency services have been notified!
        </div>
      )}
    </div>
  );
};

export default EmergencyRequestPage;
