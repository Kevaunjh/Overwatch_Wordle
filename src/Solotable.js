import React from 'react';
import Moment from 'react-moment';

const Solotable = ({ hero, name_checker }) => {

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
              <td id='Categorey2' className={name_checker ? 'correct' : 'wrong'}>{hero.name}</td>

            </tr>
          </tbody>
        </table>
    </div>
  );
};

export default Solotable;