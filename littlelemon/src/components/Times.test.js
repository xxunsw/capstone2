import React from 'react';
import { render, waitFor, fireEvent, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import * as api from '../api';

const mockSubmitForm = jest.fn();

describe('BookingForm', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('initializeTimes fetches available times on component mount', async () => {
    const mockFetchAPI = jest.fn().mockResolvedValue(['17:00', '18:00', '19:00']); // Mock the fetchAPI function to return a non-empty array
    jest.spyOn(api, 'fetchAPI').mockImplementation(mockFetchAPI);

    render(<BookingForm submitForm={mockSubmitForm} />);

    await waitFor(() => expect(mockFetchAPI).toHaveBeenCalled());
    expect(mockFetchAPI).toHaveBeenCalledWith(expect.any(Date));
  });

  test('updateTimes fetches available times for the selected date', async () => {
    const mockFetchAPI = jest.fn().mockResolvedValue(['20:00', '21:00', '22:00']); // Mock the fetchAPI function to return a non-empty array
    jest.spyOn(api, 'fetchAPI').mockImplementation(mockFetchAPI);

    render(<BookingForm submitForm={mockSubmitForm} />);

    const selectElement = screen.getByLabelText('Choose date');
    fireEvent.change(selectElement, { target: { value: '2023-07-16' } }); // Change the date to the desired pre-selected date

    await waitFor(() => expect(mockFetchAPI).toHaveBeenCalled());
    expect(mockFetchAPI).toHaveBeenCalledWith('2023-07-16');
  });
});
