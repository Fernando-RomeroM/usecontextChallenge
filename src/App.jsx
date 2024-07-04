import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './themes/ThemeContext';
import RoutesApp from './routes/RoutesApp';
import './App.css';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <div className={`App ${theme}`}>
        <RoutesApp />
      </div>
    </ThemeProvider>
  );
};

export default App;
