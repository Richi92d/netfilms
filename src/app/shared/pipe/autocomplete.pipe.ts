import { Pipe, PipeTransform } from '@angular/core';
import { MovieListe } from 'src/app/films/interfaces/movie-list';

@Pipe({
  name: 'autocomplete'
})
export class AutocompletePipe implements PipeTransform {
  transform(value: any, args?: any) {

    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();

    return value.filter(function (item: MovieListe) {
      return JSON.stringify(item).toLowerCase().includes(args);
    });
  }

}
