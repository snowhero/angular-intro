import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  }

  renderThisDay() {
    return this.days[this.currentDay];
  }

}
