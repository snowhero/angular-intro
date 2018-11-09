import { NgModule } from '@angular/core';                 //Angular imports
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';    //Our generated imports

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
