import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `]
})
export class PorPaisComponent {

  termino: string = '';
  existError: boolean = false;
  countries: Country[] = [];

  countriesSugerencias: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) {}

  buscar(termino: string): void {
    this.termino = termino;
    this.mostrarSugerencias = false;
    this.existError = false;
    // console.log(this.termino);

    this.paisService.buscarPais(this.termino)
        .subscribe((paises) => {
          this.countries = paises;
          // console.log(this.countries)
        }, (err) => {
          this.existError = true;
          this.countries = [];
          // console.log(err)
        });
  }

  sugerencias(termino: string) {
    this.existError = false;
    this.mostrarSugerencias = true;
    this.termino = termino;
    this.countriesSugerencias = [];

    if(termino !== '') {
      this.paisService.buscarPais(termino)
          .subscribe((paises) => {
            this.countriesSugerencias = paises.slice(0, 5)
            console.log(this.countriesSugerencias);
          }, (err) => {
            this.existError = true;
            this.countries = [];
            this.countriesSugerencias = [];
            // console.log(err)
          });
    }
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
  }

}
