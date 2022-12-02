import { Producto , calculaISV } from './06-desestructuracion-funcion'; //se hace una desestructuración del objeto que se está exportando, quedándonos con producto

const carritoCompras: Producto [] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 200
    }

];

const [total, isv] = calculaISV(carritoCompras);

console.log('Total', total);
console.log('ISV', isv);