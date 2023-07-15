import React, { useState } from 'react';
import Search from'./Search';
import heroes from './data.json';




const Table = (props) => {
  
  const [heroList, setHeroList] = useState([]);

  const handleButtonClick = () => {
    setHeroList(heroes);
  };


  
  return (
    <div>
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
      <button onClick={handleButtonClick}>Add Heroes to Table</button>
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
            {heroList.map((hero, index) => (
            <tr key={index}>
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