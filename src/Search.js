import React, { useState } from 'react';
import './App.css';
import heroes from './data.json';

const Send = 'https://static.thenounproject.com/png/3553333-200.png';

const Search = ({ onHeroInputChange }) => {
  const [heroName, setHeroName] = useState('');
  const [guessedHeroes, setGuessedHeroes] = useState([]);

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

    if (hero) {
      if (!guessedHeroes.includes(hero.name)) {
        setHeroName('');
        onHeroInputChange(hero);
        setGuessedHeroes((prevGuessedHeroes) => [...prevGuessedHeroes, hero.name]);
      } else {
        alert(`${hero.name} has already been guessed!`);
        setHeroName('');
      }
    } else {
      alert(`Invalid hero: ${heroName}`);
      setHeroName('');
    }
  };

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
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;