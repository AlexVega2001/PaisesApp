import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 10px;
    }
  `]
})
export class PorRegionComponent {
  regiones: string[] = ['africa','americas','asia','europe','oceania'];
  regionActiva: string = '';
  countries: Country[] = [];

  getClassCss(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  constructor(private paisService: PaisService) {}

  activarRegion(region: string) {

    if(region === this.regionActiva) { return; }
 
    this.regionActiva = region;
    this.countries = [];

    // TODO: hacer el llamado al servicio
    this.paisService.buscarRegion(region)
        .subscribe((paises) => {
          this.countries = paises;
          // console.log(this.countries)
        });
  }
}
