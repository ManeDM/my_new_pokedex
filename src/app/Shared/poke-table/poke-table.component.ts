import { Component, OnInit } from '@angular/core';
import { PokeService } from 'src/app/Service/poke.service';
import { Pipe } from 'src/app/pipes/filter.pipe';

@Component({
  selector: 'poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.scss'],
  providers: [Pipe]
})
export class PokeTableComponent implements OnInit {

  pokemons:any [] = [];
  filterPoke = '';
 
  constructor(private pokeService: PokeService) { }

  ngOnInit(): void {
    this.getPokemons();
  }
  searchPoke(){
    
  };
  getPokemons(){

    for (let i = 1; i <= 151; i++){
      this.pokeService.getPokemons(i).subscribe(
        res =>{
          console.log(res)
          this.pokemons.push(res)
        },
  
        err=>{
        },
    )};
  }};
 