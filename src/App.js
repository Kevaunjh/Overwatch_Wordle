import './App.css';
import React, { useState } from 'react';

const bckimage = 'https://wallpaperaccess.com/full/856987.jpg';
const OWLogo = 'https://www.pngmart.com/files/22/Overwatch-Logo-PNG-Isolated-HD.png';
const Send = 'https://static.thenounproject.com/png/3553333-200.png';

function App() {
  const [heroName, setHeroName] = useState('');
  const [heroList, setHeroList] = useState([]);

  const handleInputChange = (event) => {
    setHeroName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setHeroList([...heroList, heroName]);
    setHeroName('');
  };

  return (
    <div className="container">
      <img className="image" src={bckimage} alt="" />

      <img className="logosize" src={OWLogo} alt="" />

      <div className="startingtext">
        <p className="startingtextstyle1">Guess today's Overwatch champion!</p>
        <p className="startingtextstyle2">Type any hero to begin.</p>
      </div>

      <div className="container2">
        <form className="typechampiondiv" onSubmit={handleSubmit}>
          <input
            className="center"
            type="text"
            name="name"
            value={heroName}
            onChange={handleInputChange}
            placeholder="Enter an Overwatch Hero..."
          />
          <input className="sendsize" type="image" src={Send} alt="" />
        </form>
      </div>
    </div>
  );
}

export default App;