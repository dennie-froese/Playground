import React from 'react';
import {Machine} from 'xstate';

const stateMachine = Machine({
  id: 'state',
  initial: 'home',
  states: {
    home: {
      on: {NAVIGATE: 'sections'},
    },
    sections: {
      on: {
        NAVIGATE_CAPS: 'capitalise',
        NAVIGATE_ARR: 'arr',
        NAVIGATE_HOME: 'home',
      },
    },
    capitalise: {
      on: {NAVIGATE_BACK: 'sections'},
    },
    arr: {
      on: {NAVIGATE_BACK: 'sections'},
    },
  },
});

export default stateMachine;

export const StateMachineProvider = React.createContext(null);
