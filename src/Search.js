import React, { useState } from 'react';
import './App.css';
import Table from './Table';
import heroes from './data.json';

const OWLogo = 'https://www.pngmart.com/files/22/Overwatch-Logo-PNG-Isolated-HD.png';
const Send = 'https://static.thenounproject.com/png/3553333-200.png';

const Search = () => {
    const [heroName, setHeroName] = useState('');
    const [heroList, setHeroList] = useState([]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setHeroName(e.target.value);
  };

  const [isHeroValid, setIsHeroValid] = useState(false);

  const onSearch = (searchTerm) =>{
    setHeroName(searchTerm);
    console.log("search ", searchTerm);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = heroes.some(
      (hero) => hero.name.toLowerCase() === heroName.toLowerCase()
    );

    setIsHeroValid(isValid); // Update isHeroValid state

    if (isValid) {
      setHeroList([...heroList, heroName]);
      setHeroName('');
    } else {
      alert(`Invalid hero: ${heroName}`);
      setHeroList([...heroList, heroName]);
      setHeroName('');
    }
  };


  return (
    <body>
      <div id="logocontainer">
        <img className="logosize" src={OWLogo} alt="" />
      </div>
      <div className="startingtext">
        <p className="startingtextstyle1">Guess today's Overwatch champion!</p>
        <p className="startingtextstyle2">Type any hero to begin.</p>
      </div>

      <div className="formcontainer">
        <form onSubmit={handleSubmit}>

          <div id='flex'>
          <input
            className="center button1"
            type="text"
            name="name"
            value={heroName}
            onChange={handleInputChange}
            placeholder="Enter an Overwatch Hero..."
          />

          <input onClick={()=> onSearch(heroName)} className="sendsize" type="image" src={Send} alt=""/>
          </div>



          <div className="dropdown">
          <div class="dropdown-content">
            {heroes.filter(item => {
              const searchTerm = heroName.toLowerCase();
              const fullName = item.name.toLowerCase();
              return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm;
            })
            .map((item) => (
              <div onClick={()=>onSearch(item.name)} className="dropdown-row button1" key={item.name}>
                {item.name}
                </div>
            ))}
            </div>
          </div>
        </form>
      </div>

      {/* This is going to start off hidden but keep it shown for testing.
      We're going to make it show when a valid input is entered */}
      <div id="gap"></div>

      {isHeroValid ? <Table hero={heroName}/> : null}

    </body>
  );
};

export default Search;