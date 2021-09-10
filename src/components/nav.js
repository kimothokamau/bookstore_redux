import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <nav>
      <span className="Bookstore-CMS Text-Style-5">
        Bookstore CMS
      </span>
      <Link to="/">
        <span className="BOOKS Text-Style-7">
          BOOKS
        </span>
      </Link>

      <Link to="/categories">
        <span className="CATEGORIES Text-Style-7">
          CATEGORIES
        </span>
      </Link>
    </nav>

  </nav>
);

export default Nav;
