import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokeService } from 'src/app/Service/poke.service';

@Component({
  selector: 'poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.scss']
})
export class PokeTableComponent implements OnInit {

  pokemons: any[] = [];
  filterPoke = '';
  selectedPokemons: any[] = [];
  

  constructor(
    private pokeService: PokeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  addPokemon(pokemon: any) {
    if (this.selectedPokemons.length < 6 && !this.selectedPokemons.includes(pokemon)) {
      this.selectedPokemons.push(pokemon);
      console.log(pokemon)
    }
  }

  removePokemon(pokemon: any) {
    const index = this.selectedPokemons.indexOf(pokemon);
    if (index > -1) {
      this.selectedPokemons.splice(index, 1);
    }
  }

  getPokemons() {
    for (let i = 1; i <= 151; i++) {
      this.pokeService.getPokemons(i).subscribe(
        res => {
          this.pokemons.push(res);
        },
        err => {
          console.log('Error: ', err);
        }
      );
    }
  }

}