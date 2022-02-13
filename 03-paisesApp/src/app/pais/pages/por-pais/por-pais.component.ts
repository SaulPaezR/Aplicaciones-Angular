import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar() {
    this.hayError = false;
    console.log(this.termino);

    this.paisService.buscarPais(this.termino)
      .subscribe((paises) => {
        this.paises = paises;
        console.log(paises);
      },
        (err) => {
          this.hayError = true;
          this.paises=[];
      });


  }
}
