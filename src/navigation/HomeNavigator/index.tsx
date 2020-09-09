import React, {useContext} from 'react';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import Sections from 'pages/Sections';
import ArrayInsertion from 'pages/ArrayInsertion';
import CapitaliseFirstLetterOfEachWord from 'pages/CapitaliseFirstLetterOfEachWord';
import Home from 'pages/Home';
import {StateMachineProvider} from 'state/StateMachine';

const HomeStack = createStackNavigator();

export default function HomeNavigator() {
  const [current, send] = useContext(StateMachineProvider);
  return (
    <HomeStack.Navigator>
      {current.matches('routes.home') && (
        <HomeStack.Screen name="Home" component={Home} />
      )}
      {current.matches('routes.sections') && (
        <HomeStack.Screen
          name="Sections"
          component={Sections}
          options={{
            headerLeft: () => (
              <HeaderBackButton
                onPress={() => {
                  send('NAVIGATE_HOME');
                }}
              />
            ),
          }}
        />
      )}
      {current.matches('routes.capitalise') && (
        <HomeStack.Screen
          name="CapitaliseFirstLetterOfEachWord"
          component={CapitaliseFirstLetterOfEachWord}
          options={{
            headerLeft: () => (
              <HeaderBackButton
                onPress={() => {
                  send('NAVIGATE_SECTIONS');
                }}
              />
            ),
          }}
        />
      )}
      {current.matches('routes.arr') && (
        <HomeStack.Screen
          name="ArrayInsertion"
          component={ArrayInsertion}
          options={{
            headerLeft: () => (
              <HeaderBackButton
                onPress={() => {
                  send('NAVIGATE_SECTIONS');
                }}
              />
            ),
          }}
        />
      )}
    </HomeStack.Navigator>
  );
}
