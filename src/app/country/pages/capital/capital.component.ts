import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html'
})
export class CapitalComponent {

  termino: string = "";
  isError : boolean = false;
  countries: Country[] = [];
  
  constructor(private countryService: CountryService) { }

  search(termino: string) {
    this.isError = false;
    this.termino = termino;

    this.countryService.searchByCapital(termino)
        .subscribe(countries => {
          this.countries = countries;
        }, err => {
            this.isError = true;
            this.countries = [];
        });
  }
}
