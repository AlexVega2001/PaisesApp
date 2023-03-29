import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  termino: string = '';
  existError: boolean = false;
  countries: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string): void {
    this.termino = termino;
    this.existError = false;
    // console.log(this.termino);

    this.paisService.buscarPais(this.termino)
        .subscribe((paises) => {
          this.countries = paises;
          console.log(this.countries)
        }, (err) => {
          this.existError = true;
          this.countries = [];
          // console.log(err)
        });
  }

  sugerencias(termino: string) {
    this.existError = false;
  }

}
