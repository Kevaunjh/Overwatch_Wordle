import React, { useState } from 'react';
import './App.css';
import Table from './Table';
import heroes from './data.json';


const Send = 'https://static.thenounproject.com/png/3553333-200.png';

const Search = React.memo(({ onHeroInputChange }) => {
    const [heroName, setHeroName] = useState('');

  const handleInputChange = (e) => {
    setHeroName(e.target.value);
  };

  const [isHeroValid, setIsHeroValid] = useState(false);

  const onSearch = (searchTerm) =>{
    setHeroName(searchTerm);
    console.log("search ", searchTerm);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const hero = heroes.find((hero) => hero.name === heroName);

    setIsHeroValid(hero); // Update isHeroValid state

    if (hero) {
      setHeroName('');
      onHeroInputChange(hero);
    } else {
      alert(`Invalid hero: ${heroName}`);
      setHeroName('');
    }
  };


  return (
    <body>
      

      <div className="formcontainer">
        <form onSubmit={handleSubmit}>

          <div id='flex'>
          <input
            className="center"
            type="text"
            name="name"
            value={heroName}
            onChange={handleInputChange}
            placeholder="Enter an Overwatch Hero..."
          />

          <input onClick={()=> onSearch(heroName)} className="sendsize" type="image" src={Send} alt=""/>
          </div>



          <div className="dropdown">
          <div class="dropdown-content">
            {heroes.filter(item => {
              const searchTerm = heroName.toLowerCase();
              const fullName = item.name.toLowerCase();
              return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm;
            })
            .map((item) => (
              <div onClick={()=>onSearch(item.name)} className="dropdown-row" key={item.name}>
                {item.name}
                </div>
            ))}
            </div>
          </div>
        </form>
      </div>

      {/* This is going to start off hidden but keep it shown for testing.
      We're going to make it show when a valid input is entered */}
      <div id="gap"></div>
      {isHeroValid ? <Table hero={heroName}/> : null}

    </body>
  );
});

export default Search;