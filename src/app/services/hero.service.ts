import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HEROES } from '../mocks/mock-heroes';
import { HeroInterface } from '../interfaces/hero-interface';
import { Hero } from '../models/hero';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(filter: string): HeroInterface[] {
    if(!filter) {
      return HEROES;
    }
    return HEROES.filter(hero => {
      if(filter === 'hero' && hero.hero) {
        return hero;
      }
      else if (filter === 'villian' && !hero.hero) {
        return hero;
      }
    
    return hero.powers.includes(filter);
    });
  }

  getIndividualHero(params: object): HeroInterface {
    return HEROES.find( hero => hero.id === +params['id'] );  // Like saying params.id but don't know why must do
  }

}
