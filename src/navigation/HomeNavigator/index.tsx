import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Sections from 'pages/Sections';
import CapitaliseFirstLetterOfEachWord from 'pages/CapitaliseFirstLetterOfEachWord';
import Home from 'pages/Home';

const HomeStack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen
        name="CapitaliseFirstLetterOfEachWord"
        component={CapitaliseFirstLetterOfEachWord}
      />
      <HomeStack.Screen name="Sections" component={Sections} />
    </HomeStack.Navigator>
  );
}
