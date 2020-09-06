import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Sections from 'pages/Sections';
import ArrayInsertion from 'pages/ArrayInsertion';
import CapitaliseFirstLetterOfEachWord from 'pages/CapitaliseFirstLetterOfEachWord';
import Home from 'pages/Home';
import {useMachine} from '@xstate/react';
import stateMachine from 'state/StateMachine';

const HomeStack = createStackNavigator();

export default function HomeNavigator() {
  const [current, send] = useMachine(stateMachine);
  return (
    <HomeStack.Navigator>
      {current.matches('home') && (
        <HomeStack.Screen name="Home" component={Home} />
      )}
      {current.matches('sections') && (
        <HomeStack.Screen name="Sections" component={Sections} />
      )}
      {current.matches('capitalise') && (
        <HomeStack.Screen
          name="CapitaliseFirstLetterOfEachWord"
          component={CapitaliseFirstLetterOfEachWord}
        />
      )}
      {current.matches('capitalise') && (
        <HomeStack.Screen name="ArrayInsertion" component={ArrayInsertion} />
      )}
    </HomeStack.Navigator>
  );
}
