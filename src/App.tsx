import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <HomePage/>
    </div>
  );
};

export default App;
