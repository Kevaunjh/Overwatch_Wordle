import React, { useState } from 'react';
import Search from './Search';
import Table from './Table';
import Owdle from './Owdle';
import Owskindle from './Owskindle';
import Owskilldle from './Owskilldle';
import heroes from './data.json';

const App = () => {
  const [heroList, setHeroList] = useState([]);
  const [currentScreen, setCurrentScreen] = useState('default');
  const OWLogo = 'https://www.pngmart.com/files/22/Overwatch-Logo-PNG-Isolated-HD.png';

  const onHeroInputChange = (hero) => {
    setHeroList((prevHeroList) => [hero, ...prevHeroList]);
  };

  const switchToOwskindle = () => {
    setCurrentScreen('owskindle');
  };

  const switchToOwskilldle = () => {
    setCurrentScreen('owskilldle');
  };

  const switchToOwdle = () => {
    setCurrentScreen('default');
  }

  const ashe = heroes.find(hero => hero.name === "Echo");

  return (  
    <div>
      <div className="App">
        <div id="logocontainer">
          <img className="logosize" src={OWLogo} alt="" />
        </div>
       
      </div>
      {currentScreen === 'default' && (
        <>
          <div className="startingtext">
          <p className="startingtextstyle1">Guess today's Overwatch champion!</p>
          <p className="startingtextstyle2">Type any hero to begin.</p>
        </div>
          <Search onHeroInputChange={onHeroInputChange} />
          <Owdle heroList={heroList} solution={ashe} />
          <button onClick={switchToOwskindle}>Switch to Owskindle</button>
          <button onClick={switchToOwskilldle}>Switch to Owskilldle</button>
        </>
      )}
      {currentScreen === 'owskindle' && (
        <div> 
           <div className="startingtext">
          <p className="startingtextstyle1">Guess today's Overwatch Skin!</p>
          <p className="startingtextstyle2">Type any hero to begin.</p>
        </div>
        <Owskindle />
        <button onClick={switchToOwskilldle}>Switch to Owskilldle</button>
        <button onClick={switchToOwdle}>Switch to Owdle</button>
        </div>

        
        
      )}
      {currentScreen === 'owskilldle' && (
        <div> 
           <div className="startingtext">
          <p className="startingtextstyle1">Guess today's Overwatch Skill!</p>
          <p className="startingtextstyle2">Type any hero to begin.</p>
        </div>
        <Owskilldle />
        <button onClick={switchToOwskindle}>Switch to Owskindle</button>
        <button onClick={switchToOwdle}>Switch to Owdle</button>
        </div>
      )}
    </div>
  );
};

export default App;
