import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-listar-pais',
  templateUrl: './listar-pais.component.html'
})
export class ListarPaisComponent implements OnInit {

  pais!: Country;

  constructor(private activateRoute: ActivatedRoute, 
              private paisService: PaisService) {}

  ngOnInit(): void {
    
    this.activateRoute.params
        .pipe(
          switchMap(({id}) => this.paisService.obtenerPaisPorCodigo( id)),
          tap(console.log)
        )
        .subscribe(pais => this.pais = pais[0]);

    // Segunda Forma
    /*this.activateRoute.params
        .subscribe(({id}) => {
          console.log(id);

          this.paisService.obtenerPaisPorCodigo(id)
              .subscribe(country => {
                console.log(country);
              });

        })*/
  }

}
