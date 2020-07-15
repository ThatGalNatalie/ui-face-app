import React from 'react';

/* Givien more time, I would plan a better way to use Context with updating and all. This just showcases how to get the theme without prop drilling */

const ThemeContext = React.createContext();
export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export default ThemeContext;
