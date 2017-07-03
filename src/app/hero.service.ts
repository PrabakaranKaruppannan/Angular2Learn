import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Heroes } from './heroes';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return Heroes;
  }
}
