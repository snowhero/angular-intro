import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeroNotFoundComponent } from './hero-not-found/hero-not-found.component';
import { AmiibosComponent } from './amiibos/amiibos.component';
import { AmiiboDetailComponent } from './amiibo-detail/amiibo-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // '' -> default component
  { path: 'todo', component: TodoComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'hero/:id', component: HeroDetailComponent },  // /:id -> custom url to have unqiue id's 
  { path: 'heroes/:power', component: HeroesComponent },
  { path: 'hero-not-found/:no-hero', component: HeroNotFoundComponent },
  { path: 'amiibos', component: AmiibosComponent },
  { path: 'amiibo/:id', component: AmiiboDetailComponent },
  { path: 'amiibos/:category/:value', component: AmiibosComponent },
  { path: '**', component: NotFoundComponent }  // ** -> means wildcard "anything else", the last resort
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
