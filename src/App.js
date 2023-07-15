import React, { useState } from 'react';
import Search from './Search';
import Table from './Table';
import heroes from './data.json';

const App = () => {
  const [heroList, setHeroList] = useState([]);
  const OWLogo = 'https://www.pngmart.com/files/22/Overwatch-Logo-PNG-Isolated-HD.png';

  const onHeroInputChange = (hero) => {
    setHeroList((prevHeroList) => [...prevHeroList, hero]);
  };

  return (

    

      
    <div>
      <div className="App">
      <div id="logocontainer">
        <img className="logosize" src={OWLogo} alt="" />
      </div>
      <div className="startingtext">
        <p className="startingtextstyle1">Guess today's Overwatch champion!</p>
        <p className="startingtextstyle2">Type any hero to begin.</p>
      </div>
    </div>
      <Search onHeroInputChange={onHeroInputChange} />
      <Table heroList={heroList} />
    </div>
  );
};

export default App;