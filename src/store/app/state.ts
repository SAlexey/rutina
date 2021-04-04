import { Rutina } from 'components/models';

export interface AppStateInterface {
  rutinas: Rutina[];
  rightDrawerOpen: boolean;
}

function state(): AppStateInterface {
  return {
    rightDrawerOpen: false,
    rutinas: [
      {
        id: 'first',
        title: 'My First Rutina',
        name: 'first_rutina',
        text: '',
        events: [
          {
            name: 'firstEvent',
            title: 'First Event',
            duration: 1000,
            id: 'first',
            text: '',
            signalOnStart: { path: '', name: 'nosignal' },
            signalOnEnd: { path: '', name: 'nosignal' },
            signalOnExec: { path: '', name: 'nosignal' },
          },
          {
            name: 'secondEvent',
            title: 'Second Event',
            duration: 1000,
            id: 'second',
            text: '',
            signalOnStart: { path: '', name: 'nosignal' },
            signalOnEnd: { path: '', name: 'nosignal' },
            signalOnExec: { path: '', name: 'nosignal' },
          },
        ],
      },
      {
        id: 'second',
        title: 'My Second Rutina',
        name: 'first_rutina',
        text: '',
        events: [],
      },
      {
        id: 'third',
        title: 'My Third Rutina',
        name: 'first_rutina',
        text: '',
        events: [],
      },
      {
        id: 'fourth',
        title: 'My Fourth Rutina',
        name: 'first_rutina',
        text: '',
        events: [],
      },
    ],
  };
}

export default state;
