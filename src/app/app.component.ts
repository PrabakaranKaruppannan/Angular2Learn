import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service'
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(private heroService: HeroService) {

  }

  getHeroes() {
    this.heroes = this.heroService.getHeroes();
  }

  selectedHeroChanged(hero: Hero) {
    this.selectedHero = hero;
  }
}



