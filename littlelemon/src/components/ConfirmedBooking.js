import React from 'react';

const ConfirmedBooking = () => {
  const confirmationStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
    color: '#495E57',
    fontSize: '24px',
  };

  return (
    <div style={confirmationStyles}>
      <h1>Booking Confirmed</h1>
      <p>Thank you for your reservation!</p>
    </div>
  );
};

export default ConfirmedBooking;
