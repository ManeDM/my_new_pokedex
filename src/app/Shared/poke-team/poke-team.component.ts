import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokeService } from 'src/app/Service/poke.service';

@Component({
  selector: 'app-poke-team',
  templateUrl: './poke-team.component.html',
  styleUrls: ['./poke-team.component.scss']
})


export class PokeTeamComponent {

selectedPokemons: any[] = [];

constructor( private pokeService: PokeService,   private router: Router) { }

ngOnInit(): void {

  
}
  

}
