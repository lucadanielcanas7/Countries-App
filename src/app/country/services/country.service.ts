import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private baseUrl: string = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) { }

  private createUrl(searchType:string, termino: string) {
    return `${this.baseUrl}/${searchType}/${termino}`
  }

  searchCountry(termino: string): Observable<Country[]> {
    const url = this.createUrl("name",termino);  
    return this.http.get<Country[]>(url);
  }

  searchByCapital(termino: string): Observable<Country[]> {
    const url = this.createUrl("capital",termino);
    return this.http.get<Country[]>(url);
  }

  searchByRegion(termino: string): Observable<Country[]> {
      const url = this.createUrl("region", termino);
      return this.http.get<Country[]>(url);
  }

  searchByCode(code: string): Observable<Country[]> {
    const url = this.createUrl("alpha", code);
    return this.http.get<Country[]>(url);
  }

}
