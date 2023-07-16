import React from 'react';
import { Helmet } from "react-helmet";
import Image1 from '../images/restauranfood.jpg';

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Menu | Little Lemon</title>
        <meta name="description" content="Explore the menu at Little Lemon. Delicious, family-cooked meals." />
        <meta property="og:title" content="Menu | Little Lemon" />
        <meta property="og:description" content="Explore the menu at Little Lemon. Delicious, family-cooked meals." />
        <meta property="og:image" content={Image1} />
      </Helmet>
      <h1>Our Menu</h1>
      <p>Check out our delicious dishes:</p>
    </div>
  );
};

export default Menu;
