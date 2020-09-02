import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Sections from 'pages/Sections';
import CapitalizeFirstLetterOfEachWord from 'pages/CapitalizeFirstLetterOfEachWord';
import Home from 'pages/Home';

const HomeStack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen
        name="CapitalizeFirstLetterOfEachWord"
        component={CapitalizeFirstLetterOfEachWord}
      />
      <HomeStack.Screen name="Sections" component={Sections} />
    </HomeStack.Navigator>
  );
}
