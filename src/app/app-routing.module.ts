import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokeTableComponent } from './Shared/poke-table/poke-table.component';
import { PokeTeamComponent } from './Shared/poke-team/poke-team.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pokedex', component: PokeTableComponent},
  {path: 'team', component: PokeTeamComponent},
  { path: 'poke-team/:selected', component: PokeTeamComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }