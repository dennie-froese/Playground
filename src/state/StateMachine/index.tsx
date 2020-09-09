import React from 'react';
import {Machine, MachineConfig} from 'xstate';

const routesMachine = {
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
      on: {NAVIGATE_SECTIONS: 'sections'},
    },
    arr: {
      on: {NAVIGATE_SECTIONS: 'sections'},
    },
  },
};

const stateMachine = Machine({
  id: 'state',
  type: 'parallel',
  states: {
    routes: routesMachine,
    array: {},
  },
});

export default stateMachine;

export const StateMachineProvider = React.createContext(null);
