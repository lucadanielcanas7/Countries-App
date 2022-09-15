import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [
  ]
})
export class CountryComponent {

  termino: string = "";
  isError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  search(termino: string) {
    this.isError = false;
    this.termino = termino;
    
    this.countryService.searchCountry(this.termino)
      .subscribe(countries => {
        console.log(countries);
        this.countries = countries;
      }, err => {
        this.isError = true;
        this.countries = [];
      });
  }

  suggestions(termino: string) {
    this.isError = false;
    //TODO add suggestions
  }
}
