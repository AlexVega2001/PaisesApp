import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
    `
      .small-flag {
        width: 50px;
        border: 1px black solid;
      }
    `
  ],
})
export class TableComponent {
  @Input() countries: Country[] = [];
}
