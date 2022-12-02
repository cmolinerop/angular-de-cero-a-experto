/*
    ===== Código de TypeScript =====
*/

// en una clase se pueden poner las propiedades y métodos private, public o static -  cuando no hay un nivel de acceso explíciot por defecto son públicas
// las clases e interfaces son prácticamente iguales diferencias:
// las interfaces no tienen código equivalente en JS, pero las clases sí 
// las clases sirven para crear instancias
// en las interfaces no se pueden definir comportamientos, no se pueden definir métodos, son como una clase tonta 
// en las interfaces solo se puede decir que tendrá X método que devuelve X cosa pero no se puede definir el comportamiento del método

class Heroe {
    alterEgo: string;
    edad: number;
    nombreReal: string;

     //función que se va a llamar cuando se crea una instancia de la clase - se usa para inicializar las propiedades de la clase
    constructor(alterEgo: string, edad: number, nombreReal:string) {
        this.alterEgo = alterEgo;
        this.edad = edad;
        this.nombreReal = nombreReal;
    }
}

// el constructor es un poco tedioso de hacer, se suele usar más de la siguiente manera 

class Heroe2 {
    constructor(
        public alterEgo: string, 
        public edad?: number, 
        public nombreReal?:string
    ) {}
}

const ironman = new Heroe('Ironman', 32, 'Tony Stark');

console.log(ironman);

const spiderman = new Heroe2('Spiderman');
console.log(spiderman);

// extender una clase es añadir propiedades a una clase ya existente
class PersonaNormal {

    constructor(
        public nombre: string, 
        public direccion: string, 
    ) {}

}

class Heroe3 extends PersonaNormal {
    constructor(
        public alterEgo: string, 
        public edad?: number, 
        public nombreReal?:string
    ) {
        super( nombreReal, 'NY, USA'); // cuando una clase extiende a otra tiene que llamar al constructor de su padre 
    }
}

const superman = new Heroe3('Superman');
console.log(superman);
