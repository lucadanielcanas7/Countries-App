import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CapitalComponent } from './pages/capital/capital.component';
import { CountryComponent } from './pages/country/country.component';
import { RegionComponent } from './pages/region/region.component';
import { ViewCountryComponent } from './pages/view-country/view-country.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryInputComponent } from './components/country-input/country-input.component';
import { GenericErrorComponent } from './errors/generic-error/generic-error.component';



@NgModule({
  declarations: [ 
    CapitalComponent, 
    CountryComponent, 
    RegionComponent, 
    ViewCountryComponent, CountryTableComponent, CountryInputComponent, GenericErrorComponent 
  ],
  
  exports: [ 
    CapitalComponent, 
    CountryComponent, 
    RegionComponent, 
    ViewCountryComponent 
  ],
  
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CountryModule { }
