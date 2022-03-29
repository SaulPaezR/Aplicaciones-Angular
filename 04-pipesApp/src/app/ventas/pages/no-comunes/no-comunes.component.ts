import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  //i18nSelect
  nombre: string = 'Saul';
  genero: string = 'masculino';
  
  invitacionMapa={
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }


  //i18nPlural
  clientes: string[] = ['Juan', 'Pedro', 'Paco', 'Saul', 'Antonio'];
  clientesMapa = {
  '=0': 'no tenemos ningun cliente esperando.',
  '=1': 'tenemos un cliente esperando.',
  '=2': 'tenemos dos clientes esperando.',
  'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente(){
    this.nombre = 'Fernanda';
    this.genero = 'femenino';
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //keyValuePipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Monterrey, Mexico' 

  }

  //JSON Pipe

  heroes= [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]
  
  //Async Pipe

  miObservable = interval(2000); //0,1,2,3,4,5,6....

  valorPromesa = new Promise(( resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data de promesa' );
  }, 3500 );
  });

  constructor() { }

  ngOnInit(): void {
  }

}
