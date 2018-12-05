import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroInterface } from '../interfaces/hero-interface';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroInterface[];
  filter: string;
  hasFilter: boolean;

  constructor(private heroService: HeroService, private route: ActivatedRoute) { }

  updateFilter(filter?: string) { // ? -> optional input since to filter all heroes filter equals nothing ('')
    this.filter = filter;
    this.getHeroes(this.filter);
  }

  getHeroes(filter?: string) {
    return this.route.params.subscribe(params => {
      if(params.power) {
        this.hasFilter = true;
        const powerFilter: string = params.power;
        this.heroes = this.heroService.getHeroes(filter, powerFilter);
      }
      else {
        this.hasFilter = false;
        this.filter = filter;
        this.heroes = this.heroService.getHeroes(filter);
      }
    });
  }

  filterIsActive(filter?: string): boolean {
    return this.filter === filter;
  }

  ngOnInit() {  // What the page runs first when uplaoded
    this.getHeroes(this.filter);
  }

}
