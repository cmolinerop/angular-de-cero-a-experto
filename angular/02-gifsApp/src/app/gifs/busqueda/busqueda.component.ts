import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  @ViewChild('txtBusqueda') txtBuscar!: ElementRef<HTMLInputElement>; // ! not null operation assetion - decir que es seguro que no va a ser null el elemento

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;

    console.log( valor );

    this.txtBuscar.nativeElement.value = '';
  }
}
