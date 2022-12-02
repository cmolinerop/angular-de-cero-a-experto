import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'Ironman';
    edad: number = 45;

    // no es un método es un getter por lo que al llamarlo no hay que poner los paréntesis
    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad }`; //la doble tilde se conoce como un template literal - es decir construir un string ahí dentro
        // ${} esto es de JS no de angular y lo sería equivalente a la siguiente línea
        // return this.nombre + ' - ' + this.edad;
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        this.edad = 17;
    }
}