import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigator from './src/navigation/HomeNavigator';
import {useMachine} from '@xstate/react';
import stateMachine, {StateMachineProvider} from 'state/StateMachine';

export default function App() {
  const [current, send] = useMachine(stateMachine);

  return (
    <StateMachineProvider.Provider value={[current, send]}>
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    </StateMachineProvider.Provider>
  );
}

const styles = StyleSheet.create({});
