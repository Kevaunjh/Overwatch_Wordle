import React, { useState } from 'react';
import Search from './Search';
import Owdle from './Owdle';
import Owskindle from './Owskindle';
import Owskilldle from './Owskilldle';
import heroes from './data.json';
import skins from './skindata.json';
import abilities from './abilitydata.json'
import Timer from './Timer';
import Moment from 'react-moment';

const App = () => {
  const [heroList, setHeroList] = useState([]);
  const [skinheroList, setskinHeroList] = useState([]);
  const [skillheroList, setskillHeroList] = useState([]);
  const [currentScreen, setCurrentScreen] = useState('heroguess');
  const [randomNumber, setrandomNumber] = useState(22);
  const [randomNumber2, setrandomNumber2] = useState(112);
  const [randomNumber3, setrandomNumber3] = useState(92);
  const [isSearchVisible, setIsSearchVisible] = useState(true);
  const [isOwdleVisible, setIsOwdleVisible] = useState(true);
  const [isOwskilldleVisible, setIsOwskilldleVisible] = useState(true);
  const [isOwskindleVisible, setIsOwskindleVisible] = useState(true);
  
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

  const handleClose = () => {
    return;
  }

  let randomNumberz = Math.floor(Math.random() * (36 - 0 + 1) + 0);
  let randomNumberzz = Math.floor(Math.random() * (147 - 0 + 1) + 0);
  let randomNumberzzz = Math.floor(Math.random() * (139 - 0 + 1) + 0);


  const timecheck = () => {

    setIsSearchVisible(false);
    setIsOwdleVisible(false);
    setIsOwskindleVisible(false);
    setIsOwskilldleVisible(false);

    setHeroList([]);
    setskinHeroList([]);
    setskillHeroList([]);

    setrandomNumber(randomNumberz);
    setrandomNumber2(randomNumberzz);
    setrandomNumber3(randomNumberzzz);


    setTimeout(() => {
      setIsSearchVisible(true);
      setIsOwdleVisible(true);
      setIsOwskindleVisible(true);
      setIsOwskilldleVisible(true);
    }, 6000); // Adjust the delay time as needed
  };


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
          <div id='skillsize'>
          <p>Time until Switch</p>
          <Timer timecheck={timecheck} handleClose={handleClose}/>
          </div>
        </div>
        <button className='switchstyle' onClick={switchToOwskilldle}>Switch to Owskilldle</button>
        </div>

        {isSearchVisible && (<Search onHeroInputChange={onHeroInputChange} solution={ashe} currentScreen={currentScreen} />)}
        {isOwdleVisible && <Owdle heroList={heroList} solution={ashe} timecheck={timecheck} />}
          
          
          
          
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
          <div id='skillsize'>
          <p>Time until Switch</p>
          <Timer timecheck={timecheck} handleClose={handleClose}/>
          </div>
        </div>
        <button className='switchstyle' onClick={switchToOwdle}>Switch to Owdle</button>
        </div>
        {isSearchVisible && (<Search onHeroInputChange={onHeroInputChangeskin} solution={ana} currentScreen={currentScreen} />)}
        {isOwskindleVisible && <Owskindle heroList={skinheroList} solution={ana} timecheck={timecheck}/> }
        
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
          <div id='skillsize'>
          <p>Time until Switch</p>
          <Timer timecheck={timecheck} handleClose={handleClose}/>
          </div>
        </div>
        <button className='switchstyle' onClick={switchToOwdle}>Switch to Owdle</button>
        </div>
 
        {isSearchVisible && (<Search onHeroInputChange={onHeroInputChangeskill} solution={kiriko} currentScreen={currentScreen} />)}
        {isOwskilldleVisible && <Owskilldle heroList={skillheroList} solution={kiriko} timecheck={timecheck}/> }
    
        
        </div>
       
      )}
    </div>
  );
};

export default App;
