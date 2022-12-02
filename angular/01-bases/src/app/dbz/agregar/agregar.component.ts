import { Component, Input } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input('nuevoInput')
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  @Input('personajesInput')
  personajes: Personaje [] = [];

  // con angular podemos hacer la parte del evento menos tediosa con ngSubnit
  agregar() {

    if ( this.nuevo.nombre.trim().length === 0 ) {
      return;
    }

    this.personajes.push(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    };
  }

  // cambiarNombre( evento: any ){
  //   console.log(evento.target.value);
  // }

}
