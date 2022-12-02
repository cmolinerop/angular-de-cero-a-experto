import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{title}}</h1>
        <!-- no hace falta aquí poner el this. porque ya todo hace referencia al typescript -->
        <!-- <button (click)=" sumar(); ">+1</button> -->
        <button (click)=" acumular(1); ">+1</button>
        <span>{{numero}}</span>
        <button (click)=" acumular(-1); ">-1</button>
        <!-- <button (click)="restar(); ">-1</button> -->
        <!-- TAREA -->
        <h3>La base es: <strong>{{base}}</strong></h3>
        <button (click)=" acumularTarea(base); ">+{{base}}</button>
        <span>{{numeroTarea}}</span>
        <button (click)=" acumularTarea(-base); ">-{{base}}</button>
    `

})
export class ContadorComponent {
    public title: string = 'Contador'; // se recomienda poner el tipado y el nivel de acceso para mejor legibilidad

    public numero: number = 10;

    // sumar() {
    //   this.numero += 1;
    // }

    // restar() {
    //   this.numero -= 1;
    // }

    public acumular ( valor: number ): void {
        this.numero += valor;
    }

    // TAREA 
    public numeroTarea: number = 0;
    public base: number = 5;

    public acumularTarea ( valor: number ): void {
        this.numeroTarea += valor;
    }   
}