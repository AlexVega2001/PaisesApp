import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {

  termino: string = '';
  existError: boolean = false;
  countries: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string): void {
    this.termino = termino;
    this.existError = false;
    // console.log(this.termino);

    this.paisService.buscarCapital(this.termino)
        .subscribe((paises) => {
          this.countries = paises;
          // console.log(this.countries)
        }, (err) => {
          this.existError = true;
          this.countries = [];
          // console.log(err)
        });
  }
}
