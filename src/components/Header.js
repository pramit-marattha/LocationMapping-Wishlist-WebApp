import React from 'react';
import { Link } from 'gatsby';


import Container from 'components/Container';

const Header = () => {


  return (
    <header>
      <Container type="content">
        <p>
          <Link to="/">📌 LOCATION MAPPING WISHLIST WEB APP</Link>
        </p>
        <ul>
          <li>
            <Link to="/about/">📍 Locations Lists</Link>
          </li>

        </ul>
      </Container>
    </header>
  );
};

export default Header;
