
import './App.css';
import React, {useState} from 'react';
import {ImageBackground, Text, StyleSheet, View, Image} from 'react-native';

const bckimage = {uri: 'https://wallpaperaccess.com/full/856987.jpg'};
const OWLogo = {uri: 'https://www.pngmart.com/files/22/Overwatch-Logo-PNG-Isolated-HD.png'};
const Send = {uri: 'https://static.thenounproject.com/png/3553333-200.png'};


{/* Empty array im trying to add to */}

    

{/* Function to add to the array */}
  
  const addto = (event) => {
    event.preventDefault();
    const name = event.target.name;

    alert(name.value);
  }


function App() {
  return (
    <View  style={ styles.container }>
    <ImageBackground style={styles.image}>
      <Image source={OWLogo} style={styles.logosize} />

      <Text style={styles.startingtext}>
      <Text style={styles.startingtextstyle1}>Guess today's Overwatch champion! </Text>
      <Text style={styles.startingtextstyle2}>Type Any Heros to Begin.</Text>
      </Text>

      {/* Here im Trying to Add the input into an array */}


      <div style={styles.container2}>
      <form style={styles.typechampiondiv} onSubmit={addto}>
            <input style={styles.center} id="bck" type="text" name="name" placeholder='Enter a Overwatch Hero...' />
      </form>
      <input type="image" src='https://static.thenounproject.com/png/3553333-200.png' style={ styles.sendsize }/>
      </div>
      
    </ImageBackground>
  </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url("https://wallpaperaccess.com/full/856987.jpg")',
  },
  container: {
    flex: 1,
  },
  logosize: {
    width: 400,
    height: 200,
    alignSelf: 'center',
  },
  settinglayout: {
  },

  startingtext: {
    alignSelf: 'center',
    border: '2px solid #f99e1a',
    borderRadius: '20px',
    width: 400,
    paddingTop: 15,
    backgroundColor: '#43484c',

    fontSize: 20,
  },

  startingtextstyle1: {
    color: '#f99e1a',
    fontSize: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },


  startingtextstyle2: {
    color: 'black',
    fontSize: 17,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
    
  },


  container2: {
    marginTop: 14,
    display: 'flex',
    justifyContent: 'center',
  },

  center: {
    textAlign: 'center',
    height: 50,
    width: 300,
    backgroundColor: '#43484c',
    color: 'orange',
    border: '2px solid #f99e1a',
    fontSize: 16,
    marginLeft: 18,
  },

  sendsize: {
    marginTop: 0,
    width: 80,
    height: 80,
    alignSelf: 'center',
  },

  

});


export default App;
