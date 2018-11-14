import { NgModule } from '@angular/core';                 //Angular imports
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';    //Our generated imports
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todo', component: TodoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
