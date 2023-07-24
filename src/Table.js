import React from 'react';
import Moment from 'react-moment';

const Table = ({ hero, name_checker, gender_checker, age_checker, role_checker, abilities_checker, affiliation_checker }) => {

  const showImage = (item) => {
    if (item.picture) {
      return <img src={item.picture} alt={item.name} />;
    } else {
      return null;
    }
  };

  return (
    <div>
        <table id='Guesslist'>
          <tbody>
            <tr>
              <td id="picsize" className={name_checker ? 'correct' : 'wrong'}>{showImage(hero)}</td>
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