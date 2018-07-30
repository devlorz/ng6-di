import { Injectable } from '@angular/core';

@Injectable()
export class PeopleService {
  constructor() {}

  getPeople() {
    return [{ name: 'Lee' }, { name: 'Lorz' }];
  }
}
