import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  // agregar( event: any ) {
  //   console.log('hey!!');
  //   event.preventDefault();
  // }

  personajes: Personaje [] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1600
  }

  agregarNuevoPersonaje( personaje: Personaje ) {
    this.personajes.push( personaje );
  }

}