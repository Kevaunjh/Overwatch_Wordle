import React from 'react';
import Search from './Search';

const App = () => {
  const OWLogo = 'https://www.pngmart.com/files/22/Overwatch-Logo-PNG-Isolated-HD.png';
  return (
    <div className="App">
      <div id="logocontainer">
        <img className="logosize" src={OWLogo} alt="" />
      </div>
      <div className="startingtext">
        <p className="startingtextstyle1">Guess today's Overwatch champion!</p>
        <p className="startingtextstyle2">Type any hero to begin.</p>
      </div>
      <Search/>
    </div>
  );
};

export default App;