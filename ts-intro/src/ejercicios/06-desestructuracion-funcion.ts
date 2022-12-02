/*
    ===== Código de TypeScript =====
*/

//DESESTRUCTURACIÓN DE ARGUMENTOS EN UNA FUNCIÓN 

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tablet: Producto = {
    desc: 'iPad ',
    precio: 350
}

// function calculaISV( productos: Producto[]):number {
//     let total = 0;
//     productos.forEach( (producto) => {
//         total += producto.precio;
//     })

//     return total * 0.15;
// }

// para evitar "producto.precio" vamos a usar la desestructuración 
// function calculaISV( productos: Producto[]):number {
//     let total = 0;
//     productos.forEach( ({precio}) => {
//         total += precio;
//     })

//     return total * 0.15;
// }

// const articulos: Producto [] = [telefono, tablet];
// const isv: number = calculaISV(articulos);

// console.log('ISV: ', isv);


// otro ejemplo si quisiéramos devolver el total y el ISV en la función... 
export function calculaISV(productos: Producto[]): [number, number] {
    let total = 0;
    productos.forEach( ({precio}) => {
        total += precio;
    })

    return [total, total * 0.15];
}

const articulos: Producto [] = [telefono, tablet];
const [total, isv] = calculaISV(articulos); //desestructuración de arrays 

console.log('ISV: ', isv);
console.log('Total: ', total);