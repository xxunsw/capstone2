import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Button } from '@material-ui/core';
import logo from '../images/Logo.svg';
import bannerImage from '../images/restauranfood.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#F5F5F5',
    paddingTop: theme.spacing(4),
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(4),
    '& img': {
      width: '150px',
    },
  },
  navLinks: {
    '& a': {
      color: '#495E57',
      fontWeight: 'bold',
      marginRight: theme.spacing(2),
      textDecoration: 'none',
    },
  },
  banner: {
    backgroundColor: '#495E57',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(4),
    color: '#F4CE14',
    '& img': {
      width: '50%',
    },
    '& p': {
      color: '#FFFFFF',
    },
  },
  bookingButton: {
    marginTop: theme.spacing(2),
    color: '#495E57',
    backgroundColor: '#F4CE14',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#F4CE14',
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <header className={classes.header}>
          <img src={logo} alt="Logo" />
          <nav className={classes.navLinks}>
            <Link to="/" aria-label="Home">Home</Link>
            <Link to="/menu" aria-label="Menu">Menu</Link>
            <Link to="/reservations" aria-label="Reservations">Reservations</Link>
          </nav>
        </header>
        <section className={classes.banner}>
          <div>
            <Typography variant="h4" gutterBottom>
              Welcome to Little Lemon
            </Typography>
            <Typography variant="body1">
              We are a family-owned restaurant, focused on serving the very best food.
            </Typography>
            <Button
              component={Link}
              to="/reservations"
              variant="contained"
              className={classes.bookingButton}
              aria-label="Reserve a Table"
            >
              Reserve a Table
            </Button>
          </div>
          <img src={bannerImage} alt="Restaurant Food" />
        </section>
      </Container>
    </div>
  );
};

export default Home;
