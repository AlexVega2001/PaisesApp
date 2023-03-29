import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  
  
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebouncer: EventEmitter<string> = new EventEmitter();
  
  debouncer: Subject<string> = new Subject();
  
  termino: string = '';
  
  ngOnInit() {
    this.debouncer
        .pipe(
          debounceTime(300)
        )
        .subscribe(value => {
          this.onDebouncer.emit(value);
        });
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }

}
