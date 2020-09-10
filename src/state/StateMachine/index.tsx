import React from 'react';
import {Machine} from 'xstate';

const backToSections = {
  on: {NAVIGATE_SECTIONS: 'sections'},
};

const routesMachine = {
  id: 'routes',
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
    capitalise: backToSections,
    arr: backToSections,
  },
};

const arrayMachine = {
  id: 'array',
  states: {},
};

const stateMachine = Machine({
  id: 'state',
  type: 'parallel',
  context: {array: ['Orange', 'Apple', 'Banana']},
  states: {
    routes: routesMachine,
    array: arrayMachine,
  },
});

export default stateMachine;

export const StateMachineProvider = React.createContext(null);
