import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.interface';
import { CountryService } from '../../services/country.service';
import regionJson from '../../services/region.json';

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
  regions: Array<Region> = [];
  activatedRegion: string = ""

  constructor(private countryService: CountryService) {
    this.regions = this.getRegionNames();
   }

  getCSSClass(region: string): string {
    return (region === this.activatedRegion) 
            ? 'btn btn-primary ms-1 mb-1' 
            : 'btn btn-outline-primary ms-1 mb-1';
  }

  activateRegion(regionFullname: string, regionName: string): void {
    if (regionFullname === this.activatedRegion) { return }
    
    this.activatedRegion = regionFullname;
    //TODO: Hacer llamado al servicio
    this.search(regionName);
  }

  //#region PRIVATE METHODS
  private getRegionNames(): Array<Region> {
    const regionNames = regionJson.regions;
    return regionNames;
  }

  private search(termino: string): void {
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
  //#endregion
}
