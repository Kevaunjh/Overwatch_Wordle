import React from 'react';
import './Search';

const Table = (props) => {
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
        <table id='Guesslist'>
          <tbody>
            <tr>
              <td className='HeroGuessInfo'></td>
              <td className='HeroGuessInfo'>{props.hero}</td>
              <td className='HeroGuessInfo'></td>
              <td className='HeroGuessInfo'></td>
              <td className='HeroGuessInfo'></td>
              <td className='HeroGuessInfo'></td>
              <td className='HeroGuessInfo'></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;