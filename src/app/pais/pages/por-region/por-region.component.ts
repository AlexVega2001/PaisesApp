import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html'
})
export class PorRegionComponent {
  termino: string = '';
  existError: boolean = false;
  countries: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string): void {
    this.termino = termino;
    this.existError = false;
    // console.log(this.termino);

    this.paisService.buscarRegion(this.termino)
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
