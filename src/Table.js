import React from 'react';

const Table = () => {

/* This is going to start off hidden but keep it shown for the testing.
      We're going to make it when a function gets a valid input this changes to show (even tho u alr knew that <3) 
Feel free to change the styling */



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

      {/* This is where the add character function is going to create a new section with the character information*/}
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;