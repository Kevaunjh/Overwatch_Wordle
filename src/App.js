
import './App.css';
import React, {useState} from 'react';
import {ImageBackground, Text, StyleSheet, View} from 'react-native';

const bclimage = {uri: 'https://wallpaperaccess.com/full/856987.jpg'};

function App() {
  return (
    <View  style={ styles.container }>
    <ImageBackground source={bclimage} style={styles.image}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground>
  </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },

});


export default App;
