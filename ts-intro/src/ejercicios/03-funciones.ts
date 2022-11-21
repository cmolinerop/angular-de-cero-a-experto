/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
    return a + b;
}

const resultado = sumar(20, 30);

console.log(resultado);

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number { //primero los argumentos obligatorios, luego los opcionales 
    // y por último los que tienen algún valor por defecto
    return numero * base;
}

const resultado2 = multiplicar(20, 30);



interface PersonajeLOR { //lo único que hace la interfaz es restringir cómo va a funcionar un objeto
    nombre: string;
    pv: number;
    mostrarPv: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void { //en js siempre hay un retorno, por defecto si no está explícito toda función devuelve un undefined 
    personaje.pv += curarX;

    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarPv() {
        console.log('Puntos de vida', this.pv);
    }
}

curar(nuevoPersonaje, 20)

nuevoPersonaje.mostrarPv();