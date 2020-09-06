import {Machine} from 'xstate';

const stateMachine = Machine({
  id: 'state',
  initial: 'home',
  states: {
    home: {
      on: {NAVIGATE: 'sections'},
    },
    sections: {
      on: {NAVIGATE_CAPS: 'capitalise', NAVIGATE_ARR: 'arr'},
    },
    capitalise: {},
    arr: {},
  },
});

export default stateMachine;
