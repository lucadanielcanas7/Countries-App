import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  //#region GLOBAL VARIABLES
  private baseUrl: string = "https://restcountries.com/";
  private serviceV3: string = "v3.1";
  private serviceV2: string = "v2";
  //#endregion

  //#region GETTERS AND SETTERS  
  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,altSpellings,flags,population,cca3');
  }
  //#endregion

  constructor(private http: HttpClient) { }

  //#region PRIVATE METHODS
  private createUrl(version: string, searchType:string, termino: string) {
    return `${this.baseUrl}${version}/${searchType}/${termino}`
  }
  //#endregion

  //#region PUBLIC METHODS
  searchCountry(termino: string): Observable<Country[]> {
    const url = this.createUrl(this.serviceV3, "name",termino);  
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
  

  searchByCapital(termino: string): Observable<Country[]> {
    const url = this.createUrl(this.serviceV3, "capital",termino);
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  searchByRegion(termino: string): Observable<Country[]> {
      const url = this.createUrl(this.serviceV2, "regionalbloc", termino);
      return this.http.get<Country[]>(url, { params: this.httpParams })
        .pipe(
          tap( console.log )
        );
  }

  searchByCode(code: string): Observable<Country[]> {
    const url = this.createUrl(this.serviceV3, "alpha", code);
    return this.http.get<Country[]>(url);
  }
  //#endregion
}
