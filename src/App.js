import React, { useState } from 'react';
import Search from './Search';
import Owdle from './Owdle';
import Owskindle from './Owskindle';
import Owskilldle from './Owskilldle';
import heroes from './data.json';
import skins from './skindata.json';
import abilities from './abilitydata.json'

const App = () => {
  const [heroList, setHeroList] = useState([]);
  const [skinheroList, setskinHeroList] = useState([]);
  const [skillheroList, setskillHeroList] = useState([]);
  const [currentScreen, setCurrentScreen] = useState('heroguess');
  const OWLogo = 'https://www.pngmart.com/files/22/Overwatch-Logo-PNG-Isolated-HD.png';

  const onHeroInputChange = (hero) => {
    setHeroList((prevHeroList) => [hero, ...prevHeroList]);
  };

  const onHeroInputChangeskin = (hero) => {
    setskinHeroList((prevHeroList2) => [hero, ...prevHeroList2]);
  };

  const onHeroInputChangeskill = (hero) => {
    setskillHeroList((prevHeroList3) => [hero, ...prevHeroList3]);
  };


  const showImage = (item) => {
    if (item.skill) {
      return <img src={item.skill} alt={item.name} />;
    } else {
      return null;
    }
  };


  const switchToOwskindle = () => {
    setCurrentScreen('owskindle');
  };

  const switchToOwskilldle = () => {
    setCurrentScreen('owskilldle');
  };

  const switchToOwdle = () => {
    setCurrentScreen('heroguess');
  }

  
  const randomNumber = 1;
  const randomNumber2 = 0;
  const randomNumber3 = 1;


  const ashe = heroes.find(hero => hero.name === heroes[randomNumber].name);
  const ana = heroes.find(hero => hero.name === skins[randomNumber2].name);
  const kiriko = heroes.find(hero => hero.name === abilities[randomNumber3].name);

  return (  
    <div>
      <div className="App">
        <div id="logocontainer">
          <img className="logosize" src={OWLogo} alt="" />
        </div>
       
      </div>

      {/* All the stuff below allows you to switch screens if u want it in its own file go ahead */}

      {currentScreen === 'heroguess' && (
        <>
        <div id='flex' >
        <button className='switchstyle' onClick={switchToOwskindle}>Switch to Owskindle</button>
          <div className="startingtext">
          <p className="startingtextstyle1">Guess today's Overwatch champion!</p>
          <p className="startingtextstyle2">Type any hero to begin.</p>
        </div>
        <button className='switchstyle' onClick={switchToOwskilldle}>Switch to Owskilldle</button>
        </div>
        
          <Search onHeroInputChange={onHeroInputChange} solution={ashe} currentScreen={currentScreen}/>
          <Owdle heroList={heroList} solution={ashe} />
          
          
          
          
        </>
      )}
      {currentScreen === 'owskindle' && (
        <div> 
          <div id='flex' >
          <button className='switchstyle' onClick={switchToOwskilldle}>Switch to Owskilldle</button>
           <div className="startingtext">
          <p className="startingtextstyle1">Guess which heros owns today's Overwatch Skin!</p>
          <div id='flex'>
          <p className="startingtextstyle2"> Todays Skin: </p>  <p id='colourblack'> {skins[randomNumber2].skin} </p>
          </div>
          <p className="startingtextstyle2">Type any hero to begin.</p>
        </div>
        <button className='switchstyle' onClick={switchToOwdle}>Switch to Owdle</button>
        </div>
        <Search onHeroInputChange={onHeroInputChangeskin} solution={kiriko} currentScreen={currentScreen} />
        <Owskindle heroList={skinheroList} solution={kiriko}/>
        
        </div>

        
        
      )}
      {currentScreen === 'owskilldle' && (
        <div> 
              <div id='flex' >
        <button className='switchstyle' onClick={switchToOwskindle}>Switch to Owskindle</button>
           <div className="startingtext">
          <p className="startingtextstyle1">Guess today's Overwatch Skill!</p>
          <p id='skillsize'>{showImage(abilities[randomNumber3])}</p>
          <p className="startingtextstyle2">Type any hero to begin.</p>
        </div>
        <button className='switchstyle' onClick={switchToOwdle}>Switch to Owdle</button>
        </div>
 
        <Search onHeroInputChange={onHeroInputChangeskill} solution={ana}  currentScreen={currentScreen}/>
        <Owskilldle heroList={skillheroList} solution={ana}/>
    
        
        </div>
       
      )}
    </div>
  );
};

export default App;
