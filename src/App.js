
import './App.css';
import React, {useState} from 'react';
import {ImageBackground, Text, StyleSheet, View, Image} from 'react-native';

const bckimage = {uri: 'https://wallpaperaccess.com/full/856987.jpg'};
const OWLogo = {uri: 'https://www.pngmart.com/files/22/Overwatch-Logo-PNG-Isolated-HD.png'};

function App() {
  return (
    <View  style={ styles.container }>
    <ImageBackground style={styles.image}>
      <Image source={OWLogo} style={styles.logosize} />

      <Text style={styles.startingtext}>
      <Text style={styles.startingtextstyle1}>Guess today's Overwatch champion! </Text>
      <Text style={styles.startingtextstyle2}>Type Any Overwatch Heros to Begin.</Text>
      </Text>

  
      
      
      

      
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

  typechampiondiv :{

  }
});


export default App;
