import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperheroesComponent } from './superheroes/superheroes.component';
import { SuperheroesDetailComponent } from './superheroes-detail/superheroes-detail.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full' },
  { path:'home', component: HomeComponent },
  { path:'superheroes', component: SuperheroesComponent },
  { path:'superheroes/:id', component: SuperheroesDetailComponent },
  { path:'**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
