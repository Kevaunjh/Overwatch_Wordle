import React, { useState } from 'react';
import './App.css';

const OWLogo = 'https://www.pngmart.com/files/22/Overwatch-Logo-PNG-Isolated-HD.png';
const Send = 'https://static.thenounproject.com/png/3553333-200.png';

const Search = () => {
    const [heroName, setHeroName] = useState('');
    const [heroList, setHeroList] = useState([]);
    const heroes = [
      { name: "Ana" },
      { name: "Ashe" },
      { name: "Baptiste" },
      { name: "Bastion" },
      { name: "Brigitte" },
      { name: "Cassidy" },
      { name: "D.Va" },
      { name: "Doomfist" },
      { name: "Echo" },
      { name: "Genji" },
      { name: "Hanzo" },
      { name: "Junker Queen" },
      { name: "Junkrat" },
      { name: "Kiriko" },
      { name: "Lifeweaver" },
      { name: "Lucio" },
      { name: "Mei" },
      { name: "Mercy" },
      { name: "Moira" },
      { name: "Orisa" },
      { name: "Pharah" },
      { name: "Ramattra" },
      { name: "Reaper" },
      { name: "Reinhardt" },
      { name: "Roadhoag" },
      { name: "Sigma" },
      { name: "Soldier: 76" },
      { name: "Sombra" },
      { name: "Symmetra" },
      { name: "Torbjorn" },
      { name: "Tracer" },
      { name: "Widowmaker" },
      { name: "Winston" },
      { name: "Wrecking Ball" },
      { name: "Zarya" },
      { name: "Zen" }
    ];

  const handleInputChange = (e) => {
    e.preventDefault();
    setHeroName(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`${heroName}`)
    setHeroList([...heroList, heroName]);
    setHeroName('');
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
      <button className="sendsize" type="button">→</button>
      <div className="formcontainer">
        <form onSubmit={handleSubmit}>
          <input
            className="center"
            type="text"
            name="name"
            value={heroName}
            onChange={handleInputChange}
            placeholder="Enter an Overwatch Hero..."
          />
          <div className="dropdown">
            {heroes.filter(item => {
              const searchTerm = heroName.toLowerCase();
              const fullName = item.name.toLowerCase();
              return searchTerm && fullName.startsWith(searchTerm);
            })
            .map((item) => (
              <div className="dropdown-row" key={item.name}>
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