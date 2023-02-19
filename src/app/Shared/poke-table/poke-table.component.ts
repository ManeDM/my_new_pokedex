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
  

  constructor(
    private pokeService: PokeService,
    
  ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    for (let i = 1; i <= 151; i++) {
      this.pokeService.getPokemons(i).subscribe(
        res => {
          this.pokemons.push(res)
        },
        err => {
          console.log('Error: ', err)
        }
      )
    }
  }

 
}