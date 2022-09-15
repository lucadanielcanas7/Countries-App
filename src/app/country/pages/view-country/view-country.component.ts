import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styles: [
  ]
})
export class ViewCountryComponent implements OnInit {

  country!: Country;

  constructor( 
    private activatedRoute: ActivatedRoute, 
    private countryService: CountryService) { }

  ngOnInit(): void {
    
    this.activatedRoute.params
      .pipe(
        switchMap(({ countryId }) => this.countryService.searchByCode(countryId)),
        tap( console.log )
      )
      .subscribe( countries => this.country = countries[0]);
  }

}
