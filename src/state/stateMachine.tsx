import {Machine} from 'xstate';

const stateMachine = Machine({
  id: 'state',
  initial: 'HOME',
  states: {
    route: {},
  },
});

export default stateMachine;
