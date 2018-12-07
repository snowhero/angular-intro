import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // ActivatedRoute -> get URL

import { HeroInterface } from '../interfaces/hero-interface';
import { HeroService } from '../services/hero.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnDestroy {

  hero: HeroInterface;
  
  constructor(private heroService: HeroService, private route: ActivatedRoute) { }

  getHero() {
    return this.route.params.subscribe( params => {
      this.hero = this.heroService.getIndividualHero(params);
    });
  }

  ngOnInit() { 
    this.getHero();
  }

  ngOnDestroy() {
    this.getHero().unsubscribe();
  }

}
