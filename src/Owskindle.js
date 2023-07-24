import React from "react";
import Solotable from "./Solotable";
import Modal from "./Modal";
import Moment from 'react-moment';

const Owskindle = ({ heroList, solution, timecheck }) => {
  return (
    <div>
      {heroList.length > 0 && (
        <div className="CategoreyOutline">
          <table id="Guesslist">
            <thead>
              <tr>
                <th className="Categorey">Picture</th>
                <th id="Categorey3">Name</th>
              </tr>
            </thead>
          </table>
        </div>
      )}
      {heroList.map((hero, index) => {
        const name_checker = solution.name === hero.name;
        return (
          <div key={index}>
            <Solotable hero={hero} name_checker={name_checker} />
            {name_checker && <Modal solution={hero.name} timecheck={timecheck}/>}
          </div>
        );
      })}
    </div>
  );
};

export default Owskindle;
