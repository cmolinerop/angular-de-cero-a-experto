import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  // agregar( event: any ) {
  //   console.log('hey!!');
  //   event.preventDefault();
  // }

  constructor() {
  } //inyección de dependencias

  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes;
  // }

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1600
  }

}