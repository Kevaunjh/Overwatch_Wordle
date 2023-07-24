import React from 'react';
import Table from './Table';
import Modal from './Modal';
import Moment from 'react-moment';

const Owdle = ({ heroList, solution, timecheck }) => {


  return (
    <div>
        {heroList.length > 0 && <div className='CategoreyOutline'>
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
        </div>}
      {heroList.map((hero, index) => {
        const name_checker = solution.name === hero.name;
        const gender_checker = solution.gender === hero.gender;
        const age_checker = solution.age === hero.age;
        const role_checker = solution.role === hero.role;
        const abilities_checker = solution.abilities === hero.abilities;
        const affiliation_checker = solution.affiliation === hero.affiliation;
        return (
          <div>
              <Table hero={hero} 
                name_checker={name_checker} 
                gender_checker={gender_checker} 
                age_checker={age_checker} 
                role_checker={role_checker} 
                abilities_checker={abilities_checker} 
                affiliation_checker={affiliation_checker}
              />
             {name_checker && gender_checker && age_checker && role_checker && abilities_checker && affiliation_checker && <Modal  solution={hero.name} timecheck={timecheck}/>}
          </div>
        );
      })}
    </div>
  );
};

export default Owdle;