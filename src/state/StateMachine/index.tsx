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
  initial: 'start',
  states: {
    start: {
      on: {
        TICK_PUSH: 'pushTicked',
        TICK_UNSHIFT: 'unshiftTicked',
        TICK_CONCAT: 'concatTicked',
        ERROR_UNTICKED: 'errorUnticked',
        ERROR_NOINPUT: 'errorNoInput',
      },
    },
    pushTicked: {
      on: {
        ARRAY_INSERT: 'finish',
        ERROR_NOINPUT: 'errorNoInput',
      },
    },
    unshiftTicked: {
      on: {
        ARRAY_INSERT: 'finish',
        ERROR_NOINPUT: 'errorNoInput',
      },
    },
    concatTicked: {
      on: {
        ARRAY_INSERT: 'finish',
        ERROR_NOINPUT: 'errorNoInput',
      },
    },
    errorUnticked: {
      on: {
        ARRAY_INSERT: 'finish',
        ERROR_NOINPUT: 'errorNoInput',
      },
    },
    errorNoInput: {
      on: {
        ARRAY_INSERT: 'finish',
      },
    },
    finish: {},
  },
};

const stateMachine = Machine({
  id: 'state',
  type: 'parallel',
  context: {initArray: ['Orange', 'Apple', 'Banana']},
  states: {
    routes: routesMachine,
    array: arrayMachine,
  },
});

export default stateMachine;

export const StateMachineProvider = React.createContext(null);
