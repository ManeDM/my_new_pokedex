import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(pokemons: any[], pokeSearch: string): any[] {
    if (!pokemons) return [];
    if (!pokeSearch) return pokemons;
    pokeSearch = pokeSearch.toLowerCase();
    return pokemons.filter(item => {
        return item.name.toLowerCase().includes(pokeSearch);
    });
}
}

export { Pipe };
