import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams () {
    return new HttpParams().set('fields', 'name,capital,population,cca3,flags');
  }

  constructor( private http: HttpClient ) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  buscarRegion(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams })
          .pipe(
            tap( console.log )
          );;
  }

  obtenerPaisPorCodigo(id: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url)
  }
}
