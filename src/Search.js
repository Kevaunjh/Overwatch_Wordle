import React, { useState } from 'react';
import './App.css';

const OWLogo = 'https://www.pngmart.com/files/22/Overwatch-Logo-PNG-Isolated-HD.png';
const Send = 'https://static.thenounproject.com/png/3553333-200.png';

const Search = () => {
    const [heroName, setHeroName] = useState('');
    const [heroList, setHeroList] = useState([]);
    const heroes = [
      { name: "Ana", gender: "Female", age: "50-60", role: "Support", abilities: 4, affiliation: "Overwatch"},
      { name: "Ashe", gender: "Female", age: "30-40", role: "Damage", abilities: 4, affiliation: "Deadlock Gang" },
      { name: "Baptiste", gender: "Male", age: "30-40", role: "Support", abilities: 5, affiliation: "Overwatch" },
      { name: "Bastion", gender: "Other", age: "30-40", role: "Damage", abilities: 5, affiliation: "Ironclad Guild" },
      { name: "Brigitte", gender: "Female", age: "20-30", role: "Support", abilities: 7, affiliation: "Overwatch" },
      { name: "Cassidy", gender: "Male", age: "30-40", role: "Damage", abilities: 4, affiliation: "Overwatch" },
      { name: "D.Va", gender: "Female", age: "10-20", role: "Tank", abilities: 8, affiliation: "Overwatch"},
      { name: "Doomfist", gender: "Male", age: "40-50", role: "Tank", abilities: 5, affiliation: "Talon" },
      { name: "Echo", gender: "Other", age: "Classified", role: "Damage", abilities: 6, affiliation: "Overwatch" },
      { name: "Genji", gender: "Male", age: "30-40", role: "Damage", abilities: 5, affiliation: "Overwatch" },
      { name: "Hanzo", gender: "Male", age: "30-40", role: "Damage", abilities: 6, affiliation: "Shimada Clan" },
      { name: "Junker Queen", gender: "Female", age: "30-40", role: "Tank", abilities: 6, affiliation: "Junkers" },
      { name: "Junkrat", gender: "Male", age: "20-30", role: "Damage", abilities: 5, affiliation: "Junkers" },
      { name: "Kiriko", gender: "Female", age: "20-30", role: "Support", abilities: 5, affiliation: "Vigilante" },
      { name: "Lifeweaver", gender: "Female", age: "20-30", role: "Support", abilities: 6, affiliation: "Scientist" },
      { name: "Lucio", gender: "Male", age: "20-30", role: "Support", abilities: 6, affiliation: "Overwatch" },
      { name: "Mei", gender: "Female", age: "30-40", role: "Damage", abilities: 4, affiliation: "Overwatch" },
      { name: "Mercy", gender: "Female", age: "30-40", role: "Support", abilities: 6, affiliation: "Overwatch" },
      { name: "Moira", gender: "Female", age: "40-50", role: "Support", abilities: 4, affiliation: "Talon" },
      { name: "Orisa", gender: "Other", age: "1-10", role: "Tank", abilities: 5, affiliation: "Overwatch" },
      { name: "Pharah", gender: "Female", age: "30-40", role: "Damage", abilities: 5, affiliation: "Overwatch"},
      { name: "Reaper", gender: "Male", age: "50-60", role: "Damage", abilities: 5, affiliation: "Talon" },
      { name: "Ramattra", gender: "Other", age: "20-30", role: "Tank", abilities: 5, affiliation: "Null Sector" },
      { name: "Reinhardt", gender: "Male", age: "60-70", role: "Tank", abilities: 5, affiliation: "Overwatch" },
      { name: "Roadhoag", gender: "Male", age: "40-50", role: "Tank", abilities: 4, affiliation: "Junkers" },
      { name: "Sigma", gender: "Male", age: "60-70", role: "Tank", abilities: 5, affiliation: "Talon" },
      { name: "Sojourn", gender: "Female", age: "50-60", role: "Damage", abilities: 4, affiliation: "Overwatch"},
      { name: "Soldier: 76", gender: "Male", age: "50-60", role: "Damage", abilities: 5, affiliation: "Overwatch" },
      { name: "Sombra", gender: "Female", age: "30-40", role: "Damage", abilities: 6, affiliation: "Talon" },
      { name: "Symmetra", gender: "Female", age: "20-30", role: "Damage", abilities: 4, affiliation: "Vishkar Corporation" },
      { name: "Torbjorn", gender: "Male", age: "50-60", role: "Damage", abilities: 5, affiliation: "Ironclad Guild" },
      { name: "Tracer", gender: "Female", age: "20-30", role: "Damage", abilities: 4, affiliation: "Overwatch" },
      { name: "Widowmaker", gender: "Female", age: "30-40", role: "Damage", abilities: 4, affiliation: "Talon"},
      { name: "Winston", gender: "Male", age: "20-30", role: "Tank", abilities: 4, affiliation: "Overwatch" },
      { name: "Wrecking Ball", gender: "Male", age: "10-20", role: "Tank", abilities: 6, affiliation: "Junkers" },
      { name: "Zarya", gender: "Female", age: "20-30", role: "Tank", abilities: 5, affiliation: "Overwatch" },
      { name: "Zenyatta", gender: "Other", age: "20-30", role: "Support", abilities: 5, affiliation: "Shambali" }
    ];
  const handleInputChange = (e) => {
    e.preventDefault();
    setHeroName(e.target.value);
  };

  const onSearch = (searchTerm) =>{
    setHeroName(searchTerm);
    console.log("search ", searchTerm);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const isHeroValid = heroes.some(hero => hero.name.toLowerCase() === heroName.toLowerCase());
  
    if (isHeroValid) {
      alert(`Valid hero: ${heroName}`);
      setHeroList([...heroList, heroName]);
      setHeroName('');
    } else {
      alert(`Invalid hero: ${heroName}`);
    }
  };

  return (
    <body>
      <div id="logocontainer">
        <img className="logosize" src={OWLogo} alt="" />
      </div>
      <div className="startingtext">
        <p className="startingtextstyle1">Guess today's Overwatch champion!</p>
        <p className="startingtextstyle2">Type any hero to begin.</p>
      </div>

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
        </form>
      </div>
    </body>
  );
};

export default Search;