import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperheroesComponent } from './superheroes/superheroes.component';
import { SuperheroesDetailComponent } from './superheroes-detail/superheroes-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperheroesComponent,
    SuperheroesDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
