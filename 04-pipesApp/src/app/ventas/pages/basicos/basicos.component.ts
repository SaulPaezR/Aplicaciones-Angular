import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower: string = 'saul';
  nombreUpper: string = 'SAUL';
  nombreCompleto: string = 'SauL PaeZ';

  fecha:Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
