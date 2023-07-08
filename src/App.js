import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';

function App() {
  return (
    <View
    style={{
      flexDirection: 'row',
      height: 100,
      padding: 20,
    }}>
    <View style={{backgroundColor: 'blue', flex: 0.3}} />
    <View style={{backgroundColor: 'red', flex: 0.5}} />
    <Text>Hello World!</Text>
  </View>
  );
}

export default App;
