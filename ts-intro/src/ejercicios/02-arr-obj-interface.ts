/*
    ===== Código de TypeScript =====
*/
// ARRAYS
let habilidades: string [] = ['Bash', 'Counter', 'Healing'];

// habilidades.push(1); // se queja porque no es un string 

// OBJETOS
interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string [];
    puebloNatal?: string; //para indicarle que es un campo opcional se pone el signo de interrogación - así no dará error al inicializar personaje
}

const personaje: Personaje = {
    nombre: 'Strider', 
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo Paleta'; // para solucionarlo se podría poner que personaje es de tipo any, pero esto lo queremos evitar a toda costa en typescript 
//así que para ello se definen las interfaces - que a mi entender es como definir el objeto en sí 

console.table(personaje);

