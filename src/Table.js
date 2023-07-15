import React, { useState } from 'react';
import Search from'./Search';
import heroes from './data.json';




const Table = () => {
  const [heroList, setHeroList] = useState([]);
  const [heroName, setHeroName] = useState('');

  const handleInputChange = (event) => {
    setHeroName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const hero = heroes.find((hero) => hero.name === heroName);
    if (hero) {
      setHeroList([...heroList, hero]);
    }
  };

  const handleButtonClick = (hero) => {
    setHeroList([...heroList, hero]);
  };



  
  return (
    <div>
      <button onClick={() => handleButtonClick(heroes[0])}>Add Superman to Table</button>
      <button onClick={() => handleButtonClick(heroes[1])}>Add Spiderman to Table</button>
      <button onClick={() => handleButtonClick(heroes[2])}>Add Batman to Table</button>
      <div className='CategoreyOutline'>
        <table id='Guesslist'>
          <thead>
            <tr>
              <th className='Categorey'>Picture</th>
              <th className='Categorey'>Name</th>
              <th className='Categorey'>Gender</th>
              <th className='Categorey'>Age</th>
              <th className='Categorey'>Role</th>
              <th className='Categorey'># of Abilities</th>
              <th className='Categorey'>Affliation</th>
            </tr>
          </thead>
        </table>
      </div>

      <div className='Guesses'>
     
        <table id='Guesslist'>
          <tbody>
            <tr>
              <td className='HeroGuessInfo'></td>
              <td className='HeroGuessInfo'></td>
              <td className='HeroGuessInfo'></td>
              <td className='HeroGuessInfo'></td>
              <td className='HeroGuessInfo'></td>
              <td className='HeroGuessInfo'></td>
              <td className='HeroGuessInfo'></td>
            </tr>
            {heroList.map((hero) => (
            <tr key={hero.id}>
              <td className='HeroGuessInfo'>{hero.name}</td>
              <td className='HeroGuessInfo'>{hero.name}</td>
              <td className='HeroGuessInfo'>{hero.gender}</td>
              <td className='HeroGuessInfo'>{hero.age}</td>
              <td className='HeroGuessInfo'>{hero.role}</td>
              <td className='HeroGuessInfo'>{hero.abilities}</td>
              <td className='HeroGuessInfo'>{hero.affiliation}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;