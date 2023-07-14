import React from 'react';
import Search from './Search';

const App = () => {
  return (
    <body className="image">
      <div id="logocontainer">
      <img className="logosize" src={OWLogo} alt="" />
      </div>
      <div className="startingtext">
        <p className="startingtextstyle1">Guess today's Overwatch champion!</p>
        <p className="startingtextstyle2">Type any hero to begin.</p>
      </div>
      <button className="sendsize" type="image" src={Send} alt=""/>
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

              return searchTerm && fullName.startsWith(searchTerm)
            })
            .map((item) => (
              <div className="dropdown-row">{item.name}</div>
            ))}
          </div>
        </form>
        
      </div>
      
    </body>
  );
};

export default App;