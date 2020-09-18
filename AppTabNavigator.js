import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '../screens/Home';
import Exchange from '../screens/Exchange';



export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks : {
    screen: Home,
    navigationOptions :{
      
      tabBarLabel : "home",
    }
  },
  BookRequest: {
    screen: Exchange,
    navigationOptions :{
      
      tabBarLabel : "exchange",
    }
  }
});
