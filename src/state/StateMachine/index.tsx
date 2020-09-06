import {Machine} from 'xstate';

const stateMachine = Machine({
  id: 'state',
  initial: 'home',
  states: {
    home: {
      on: {NAVIGATE: 'sections'},
    },
    sections: {},
    capitalise: {},
  },
});

export default stateMachine;
