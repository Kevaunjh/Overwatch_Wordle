import React, { useState } from 'react';

const Table = ({ hero, name_checker, gender_checker, age_checker, role_checker, abilities_checker, affiliation_checker }) => {
  return (
    <div>
        <table id='Guesslist'>
          <tbody>
            <tr>
              <td className={name_checker ? 'correct' : 'wrong'}>{hero.name}</td>
              <td className={name_checker ? 'correct' : 'wrong'}>{hero.name}</td>
              <td className={gender_checker ? 'correct' : 'wrong'}>{hero.gender}</td>
              <td className={age_checker ? 'correct' : 'wrong'}>{hero.age}</td>
              <td className={role_checker ? 'correct' : 'wrong'}>{hero.role}</td>
              <td className={abilities_checker ? 'correct' : 'wrong'}>{hero.abilities}</td>
              <td className={affiliation_checker ? 'correct' : 'wrong'}>{hero.affiliation}</td>
            </tr>
          </tbody>
        </table>
    </div>
  );
};

export default Table;