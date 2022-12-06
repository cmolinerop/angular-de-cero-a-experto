import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  // con angular podemos hacer la parte del evento menos tediosa con ngSubnit
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    console.log('I love you');
    if ( this.nuevo.nombre.trim().length === 0 ) {
      return;
    }

    this.onNuevoPersonaje.emit( this.nuevo );

    this.nuevo = {
      nombre: '',
      poder: 0
    };
  }

  // cambiarNombre( evento: any ){
  //   console.log(evento.target.value);
  // }

}
