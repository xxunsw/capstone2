import React from 'react';
import BookingForm from '../components/BookingForm';

const Reservations = ({ submitForm }) => {
  return (
    <div>
      <h1>Reservations</h1>
      <BookingForm submitForm={submitForm} />
    </div>
  );
};

export default Reservations;
