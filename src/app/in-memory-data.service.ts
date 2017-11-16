import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 1, name: 'Bald Cape'},
      {id: 2, name: 'Demon Cyborg'},
      {id: 3, name: 'King'},
      {id: 4, name: 'Silver Fang'},
      {id: 5, name: 'Tornado'},
      {id: 6, name: 'Zombie man'},
      {id: 7, name: 'Metal Knight'},
      {id: 8, name: 'Metal Bat'},
      {id: 9, name: 'Drive Knight'}
    ];

    return {heroes};
  }
}
