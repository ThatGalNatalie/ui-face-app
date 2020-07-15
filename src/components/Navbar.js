import React from 'react';

import '../css/Navbar.css';

import ThemeButton from './ThemeButton';

function NavBar() {
  return (
    <div>
      <ul className='navigation'>
        <ThemeButton />
      </ul>
    </div>
  );
}

export default NavBar;
