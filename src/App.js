import React from 'react';
import { ThemeProvider } from './context/ThemeContext';

import './css/App.css';

// Stateless
import Header from './components/Header';
import Info from './components/Info';
import Navbar from './components/Navbar';

// State
import StaffList from './components/StaffList';

// If I were using a different API then I would not use process.env to make the request with the API key but only for this purpose.

const defaultText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

function App() {
  return (
    <div>
      <ThemeProvider value={themes.dark}>
        <Navbar />
      </ThemeProvider>

      <div className='container'>
        <div className='left'>
          <Header title='Our Team' />
          <StaffList />
        </div>
        <div className='right'>
          <Header title='About Us' />
          <Info text={defaultText} />
          <Info text={defaultText} />
          <Info text={defaultText} />
          <Info text={defaultText} />
          <Info text={defaultText} />
        </div>
      </div>
    </div>
  );
}

export default App;
