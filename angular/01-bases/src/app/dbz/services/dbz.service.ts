import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {
    // ORDEN 
    // 1- Propiedades
    // 2- Getters y Setters
    // 3- Constructor
    // 4- Métodos
    
    // estándar _ delante de propiedad privada
    private _personajes: Personaje [] = [
        {
        nombre: 'Goku',
        poder: 15000
        },
        {
        nombre: 'Vegeta',
        poder: 7500
        }
    ];

    // !!!! los objetos son mandados por referencia
    // para evitar futuras manipulaciones del string vamos a usar el ooperador spread
    // que coge cada uno de los elementos independientes del array y se crea un nuevo array con ellos
    get personajes(): Personaje[] {
        // return this._personajes;
        return [...this._personajes];
    }

    constructor() {}

    agregarPersonajes( personaje: Personaje ) {
        this._personajes.push( personaje );
    }

}