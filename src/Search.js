import React, { useState } from 'react';
import './App.css';
import heroes from './data.json';
import Moment from 'react-moment';

const Send = 'https://static.thenounproject.com/png/3553333-200.png';

let recentguess1 = '';
let recentguess2 = '';
let recentguess3 = '';

const Search = ({ onHeroInputChange, solution, currentScreen }) => {
  const [heroName, setHeroName] = useState('');
  const [guessedHeroes, setGuessedHeroes] = useState([]);
  const [correctguess, setcorrectguess] = useState(false);

  const handleInputChange = (e) => {
    setHeroName(e.target.value);
  };

  const onSearch = (searchTerm) => {
    setHeroName(searchTerm);
    console.log("search ", searchTerm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const hero = heroes.find((hero) => hero.name.toLowerCase() === heroName.toLowerCase());

    if (currentScreen === 'heroguess') {
      recentguess1 = heroName;
    } else if (currentScreen === 'owskindle') {
      recentguess2 = heroName;
    } else if (currentScreen === 'owskilldle'){
      recentguess3 = heroName;
    } else {

    }

    if (hero && !guessedHeroes.includes(hero.name)) {
      setHeroName('');
      onHeroInputChange(hero);
      setGuessedHeroes((prevGuessedHeroes) => [...prevGuessedHeroes, hero.name]);
      if ((heroName === solution.name && currentScreen === 'heroguess' ) || (recentguess1===solution.name && currentScreen === 'heroguess')){
        setcorrectguess(true);
      } else if  ((heroName === solution.name && currentScreen === 'owskindle' ) || (recentguess2===solution.name && currentScreen === 'owskindle')) {
        setcorrectguess(true);
      } else if ((heroName === solution.name && currentScreen === 'owskilldle' ) || (recentguess3===solution.name && currentScreen === 'owskilldle')) {
        setcorrectguess(true);
      } else  {
        setcorrectguess(false);
      }
    } 
  };
  
   if (recentguess1===solution.name && currentScreen === 'heroguess') {
    return null;
  } else if (recentguess2===solution.name && currentScreen === 'owskindle') {
    return null;
  } else if (recentguess3===solution.name && currentScreen === 'owskilldle') {
    return null;
  } else {
  }


  
  return (
    <div className="formcontainer">
      <form onSubmit={handleSubmit}>
        <div id='flex'>
          <input
            className="center"
            type="text"
            name="name"
            value={heroName}
            onChange={handleInputChange}
            placeholder="Enter an Overwatch Hero..."
          />

          <input onClick={() => onSearch(heroName)} className="sendsize" type="image" src={Send} alt="" />
        </div>

        <div className="dropdown">
          <div className="dropdown-content">
            {heroes
              .filter((item) => {
                const searchTerm = heroName.toLowerCase();
                const fullName = item.name.toLowerCase();
                return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm && !guessedHeroes.includes(item.name);
              })
              .map((item) => (
                <div
                  onClick={() => onSearch(item.name)}
                  className="dropdown-row"
                  key={item.name}
                >
                  {item.name}
                </div>
              ))}
              {heroName && !heroes.some((item) => item.name.toLowerCase().startsWith(heroName.toLowerCase())) && <div className="notfound">No hero found.</div>}
          </div>
        </div>
      </form>

      {}
    </div>
  );
};

export default Search;