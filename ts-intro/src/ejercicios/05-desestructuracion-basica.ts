// DESESTRUCTURACIÓN DE OBJETOS (llaves)
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36, 
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 1994
    }
}

// console.log('El volumen actual es de: ', reproductor.volumen);
// console.log('El segudndo actual es de: ', reproductor.segundo);
// console.log('La canción actual es: ', reproductor.cancion);
// console.log('El autor actual es : ', reproductor.detalles.autor);

// la desestructuración es extraer directamente las propiedades que nos interesen de un objeto y crear variables - para no tener que estar poniendo tanto "reproductor.XXXX"
const { volumen , segundo , cancion, detalles} = reproductor; //grupo de constantes: toma el objeto reproductor y coge las propiedades de dentro de las llaves
const { autor } = detalles; //opción preferida 

// const { volumen , segundo , cancion, detalles : { autor }} = reproductor; //segunda forma de desestructurar detalles, 
// pero puede ser más liosa porque los dos puntos pueden confundirse con el tipo  variable 

// en el caso de que la propiedad de uno de los objetos se llame igual que una de nuestras variables se les pueden dar "alias" 
// const { volumen: vol, segundo , cancion, detalles} = reproductor; // a partir de ahora en vez de volumen usaremos vol para referirnos a esta propiedad

console.log('El volumen actual es de: ', volumen);
console.log('El segudndo actual es de: ', segundo);
console.log('La canción actual es: ', cancion);
console.log('El autor actual es : ', autor);


// DESESTRUCTURACIÓN DE ARRAYS (corchetes)
const dbz: string [] = ['Goku', 'Vegeta', 'Trunks'];

// console.log('Personaje 1: ', dbz[0]);
// console.log('Personaje 2: ', dbz[1]);
// console.log('Personaje 3: ', dbz[2]);

const [ p1, p2, p3 ] = dbz; //la desestructuración de arrays la posición es lo importante, en la de objetos es por nombre

console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);

// si solo nos interesa desestructurar uno de los elementos del array se dejan solo las comas
// const [ , , p3 ] = dbz; 