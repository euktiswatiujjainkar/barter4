import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import Signuploginscreen from '../screens/Signuploginscreen';
import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';




export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
 Exchange:{screen: Exchange},
  Home:{screen: Home}
})

const AppContainer =  createAppContainer(switchNavigator);

