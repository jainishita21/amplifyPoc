import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/"><b>Home</b></Link>
        </li>
        <li>
          <Link to="/about"><b>About</b></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;