import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject, subscribeOn } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Translation } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  deBouncer: Subject<string> = new Subject();

  termino: string = '';

  constructor() { }

  ngOnInit(): void {
    this.deBouncer
    .pipe(debounceTime(300))
    .subscribe( valor => {
      this.onDebounce.emit( valor );
    } )
  }

  buscar(){
    this.onEnter.emit( this.termino );
  }

  teclaPresionada( ){
    this.deBouncer.next(this.termino);
  }
  



}
