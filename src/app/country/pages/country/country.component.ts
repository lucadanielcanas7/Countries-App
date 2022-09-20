import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class CountryComponent {

  termino: string = "";
  isError: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  viewSuggested: Boolean = false;

  constructor(private countryService: CountryService) { }

  search(termino: string) {
    this.isError = false;
    this.termino = termino;
    
    this.countryService.searchCountry(this.termino)
      .subscribe(countries => {
        this.countries = countries;
      }, err => {
        this.isError = true;
        this.countries = [];
      });
  }

  suggestions(termino: string) {
    this.isError = false;
    this.termino = termino;
    this.viewSuggested = true;

    this.countryService.searchCountry(termino)
      .pipe(
        tap( console.log)
      )
      .subscribe(
        countries => this.suggestedCountries = countries.splice(0, 5),
        err => this.suggestedCountries = []  
      )
  }
  
  searchSuggested(termino: string) {
    this.search(termino);
    this.viewSuggested = false;
  }
}
