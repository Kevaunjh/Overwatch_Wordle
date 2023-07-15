import React, { useState } from 'react';
import Search from'./Search';




const Table = () => {
  const [heroList, setHeroList] = useState([]);

  const onHeroInputChange = (hero) => {
    setHeroList((prevHeroList) => [...prevHeroList, hero]);

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
      <Search onHeroInputChange={onHeroInputChange} />
      <div className='Guesses'>
        <table id='Guesslist'>
          <tbody>
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