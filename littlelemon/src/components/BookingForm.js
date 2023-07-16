import React, { useState, useEffect } from 'react';
import { fetchAPI } from '../api';

const BookingForm = ({ submitForm }) => {
  const formStyles = {
    display: 'grid',
    maxWidth: '200px',
    gap: '20px',
    color: '#495E57',
    fontSize: '14px',
  };

  const labelStyles = {
    fontWeight: 'bold',
  };

  const [availableTimes, setAvailableTimes] = useState([]);
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [date, setDate] = useState('');
  const [dateError, setDateError] = useState('');
  const [guests, setGuests] = useState('');
  const [guestsError, setGuestsError] = useState('');

  const initializeTimes = async () => {
    const today = new Date();
    const times = await fetchAPI(today);
    setAvailableTimes(times);
  };

  const updateTimes = async (selectedDate) => {
    const times = await fetchAPI(selectedDate);
    setAvailableTimes(times);
  };

  useEffect(() => {
    initializeTimes();
  }, []);

  const validateForm = () => {
    let isValid = true;

    if (name.trim() === '') {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }

    if (date.trim() === '') {
      setDateError('Date is required');
      isValid = false;
    } else {
      setDateError('');
    }

    if (guests.trim() === '') {
      setGuestsError('Number of guests is required');
      isValid = false;
    } else {
      setGuestsError('');
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formData = {
      name: name.trim(),
      date: date.trim(),
      time: document.getElementById('res-time').value,
      guests: guests.trim(),
      occasion: document.getElementById('occasion').value,
    };
    submitForm(formData);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
    updateTimes(event.target.value);
  };

  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };

  return (
    <form style={formStyles} onSubmit={handleSubmit}>
      <label htmlFor="name" style={labelStyles}>
        Name
      </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={handleNameChange}
        required
        aria-invalid={nameError ? 'true' : 'false'}
      />
      {nameError && <span style={{ color: 'red' }}>{nameError}</span>}
      <label htmlFor="res-date" style={labelStyles}>
        Choose date
      </label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
        aria-invalid={dateError ? 'true' : 'false'}
      />
      {dateError && <span style={{ color: 'red' }}>{dateError}</span>}
      <label htmlFor="res-time" style={labelStyles}>
        Choose time
      </label>
      <select id="res-time">
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
      <label htmlFor="guests" style={labelStyles}>
        Number of guests
      </label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={handleGuestsChange}
        required
        aria-invalid={guestsError ? 'true' : 'false'}
      />
      {guestsError && <span style={{ color: 'red' }}>{guestsError}</span>}
      <label htmlFor="occasion" style={labelStyles}>
        Occasion
      </label>
      <select id="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input
        type="submit"
        value="Make Your reservation"
        style={{ backgroundColor: '#F4CE14', color: '#495E57', fontWeight: 'bold' }}
      />
    </form>
  );
};

export default BookingForm;
