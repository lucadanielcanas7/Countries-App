import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [
  ]
})
export class RegionComponent {

  termino: string = "";
  isError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  search(termino: string): void {
    this.isError = false;
    this.termino = termino;

    this.countryService.searchByRegion(termino)
        .subscribe(countries => {
          this.countries = countries;
        }, err => {
          this.isError = true;
          this.countries = [];
        });
  }
}
