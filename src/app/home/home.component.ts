import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  title: String = 'angular-intro-p1';
  name: String = 'Hiroyuki';
  currentDay: any = new Date().getDay(); // 'any' instead of 'number' because the object 'days' only reads
                                         // days[0] etc. with strings not numbers BUT this is bad practice
  days: Object = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  };
  languages: Object[] = [
    {
      name: ['English', 'Spanish'],
      country: 'America'
    }
    {
      name: ['Spanish', 'Arabic'],
      country: 'Spain'
    }
    {
      name: ['French', 'Basque'],
      country: 'France'
    }
    {
      name: ['German', 'English'],
      country: 'Germany'
    }
  ];

  constructor() { }

  ngOnInit() {
    console.log('Hello');
  }

  renderThisDay(): String {
    return this.days[this.currentDay];
  }

  renderSpokenLanguages(languages): String {
    return languages.join(', ');
  }

  ignoreLanguages(languages): Boolean {
    const languageToIgnore = 'English';
    return !languages.name.includes(languageToIgnore);//includes() method allows matching search to return true or false
  }
  ngOnDestroy() {
    console.log('Good Bye');
  }

}
