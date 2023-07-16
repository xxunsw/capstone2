import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';
import ConfirmedBooking from './components/ConfirmedBooking';
import { submitAPI } from './api';

const theme = createTheme();

const App = () => {
  const submitForm = async (formData) => {
    const isFormValid = validateForm(formData);
    if (isFormValid) {
      const isSubmitted = await submitAPI(formData);
      if (isSubmitted) {
        window.location.href = '/confirmed';
      }
    }
  };

  const validateForm = (formData) => {
    // Perform validation logic
    const { name, date, time, guests} = formData;

    if (name.trim() === '') {
      // Invalid name
      return false;
    }

    if (date.trim() === '') {
      // Invalid date
      return false;
    }

    if (time.trim() === '') {
      // Invalid time
      return false;
    }

    if (guests < 1 || guests > 10) {
      // Invalid number of guests
      return false;
    }

    return true;
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route
            path="/reservations"
            element={<Reservations submitForm={submitForm} />}
          />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
