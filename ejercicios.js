// EJERCICIO 1 : Realiza la multiplicación de el siguiente arreglo: [10, “5”, “7”,9,23,”17”].
// Arreglo que contiene numeros y cadenas de texto
const num = [10, "5", "7", 9, 23, "17"];
/*
con la funcion (Number) me aseguro de que todos los datos de entrada sean numeros 
convirtiendo a tipo numerico los que estan como cadena
*/
let multiplicar = num.map(Number).reduce((acumulado, valor) => acumulado * valor);
console.log(`1-El resultado de la multiplicacion del arreglo es el siguiente: ${multiplicar}`)




// EJERCICIO 2 :  Crea un array que solo traiga elementos que tengan solo 6 caracteres.
// Arreglo 
const deportes = ['Futbol', 'Basketbol', 'Voleibol', 'Beisbol', 'hockey', 'Karate', 'Saltos']
// Verifico los elementos que contienen 6 caracteres y usando el metodo filter muestro los que cumplan esa condicion
const verificar = deportes.filter(element => element.length === 6);
// Imprimo por consola
console.log(`2-Elementos que contienen 6 caracteres: ${verificar}`)




// EJERCICIO 3 : Imprime la tabla de multiplicar 7 usando el forEach()
// Tabla del 7
let tabla = 7;
// Numeros a multiplicar
const m = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Multiplicacion
console.log('3-Tabla del 7')
m.forEach(element => {
    const multiplicacion = tabla * element;
    console.log(`${tabla} x ${element} = ${multiplicacion}`);
});




// EJERCICIO 4 : Crea el siguiente arreglo (manzana, limon, sandia, pera, toronja, naranja) y verifica que incluya la fruta sandia
// Arreglo de frutas
const frutas = ['manzana', 'limon', 'sandia', 'pera', 'toronja', 'naranja']
// Con el metodo find busco sandia dentro del arreglo
const encontarFruta = frutas.find(element => element === 'sandia');
// Verifico si se encuentra la fruta sandia 
if (encontarFruta) {
    console.log(`4-El arreglo incluye la fruta ${encontarFruta}`)
}
else {
    console.log(`4-El arreglo no incluye la fruta sandia`)
}




/* EJERCICIO 5 : En el siguiente arreglo de usuarios busca el usuario con el email rosario@gmail.com
Usuarios:[
  {
      name: “Rafael perez”,
      email: rafael@gmail.com
   },
  {
      name: “Rosario Perez”,
      email: rosario@gmail.com
   },
  {
      name: “Rodrigo avila”,
      email: rodrigo@gmail.com
   },
  {
      name: “Alberto Campos”,
      email: alberto@gmail.com
   },


],*/
// Array de objetos
const Usuarios = [
    {
        name: 'Rafael perez',
        email: 'rafael@gmail.com'
    },
    {
        name: 'Rosario Perez',
        email: 'rosario@gmail.com'
    },
    {
        name: 'Rodrigo avila',
        email: 'rodrigo@gmail.com'
    },
    {
        name: 'Alberto Campos',
        email: 'alberto@gmail.com'
    }]
// Busco a un usuario por el email
const buscarEmail = Usuarios.find(element => element.email === 'rosario@gmail.com');
console.log(`5-El usuario con el email: ${buscarEmail.email} es: ${buscarEmail.name}`)




// 6) En el siguiente arreglo: [1,6,3,4,2,56,10], ordénalos de manera descendente. 
// Arreglo de numeros
const number = [1, 6, 3, 4, 2, 56, 10];
// Metodo sort sirve para ordenar arreglos
number.sort((a, b) => b - a)
// Imprimo por consola
console.log(`6-Ordenado de manera descendente: ${number}`)




// 7) En el siguiente arreglo: [1,2,3,4,5,6,7], verifica si todos los números son mayores a 5.
// Arreglo de numeros
const nums = [1, 2, 3, 4, 5, 6, 7];
// Con el metodo every verifico si todos los numeros son mayor que 5
const mayor = nums.every(element => element > 5);
// Evaluo si se cumple la condicion
if (mayor)
    console.log(`7-Todos los numeros son mayor que 5`)
else
    console.log('7-Los numeros no son mayor a 5')




/* 8)Agrega 3 arreglos que contenga al menos 2 elementos cada uno de los arreglos será diferente 
uno será de tipo numérico, uno string y otro booleano. Concatena los 3 arreglos, usando “concat”*/
const array1 = [10, 20]
const array2 = ['Rodrigo', 'Reyes']
const array3 = [true, false]
// Con el metodo concat puedo unir varios array y crear uno nuevo con la union de estos
const unionDeArrays = array1.concat(array2, array3);
console.log(`8-${unionDeArrays}`)




// 9) Crea un arreglo numérico y elimina el primer elemento.
const arrNum = [1, 2, 3, 4, 5, 6, 7, 8]
// Elimino el primer elemento
arrNum.shift();
console.log(`9-${arrNum}`)




// 10) Buscar el índice en el que se encuentre el numero 5 en este arreglo: [12,6,7,8,11,10,9,5,3,43]
const arr = [12, 6, 7, 8, 11, 10, 9, 5, 3, 43];
let indice = arr.indexOf(5);
console.log(`10-El 5 se encuentra en el indice: ${indice}`)




/* 11) crea un arreglo donde su inicio sea 1 y su fin 10 y luego crea una copia de el arreglo 
pero a cada item multiplícalo por 3.
*/
// Arreglo
const arrr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Imprimo el arreglo original
console.log(`11-Arreglo inicial: ${arrr}`)
// Copia del arreglo original
const copia = arrr.slice();
// Imprimo la copia del arreglo original por 3
console.log('11-Copia del arreglo multiplicado por 3')
for (let n of copia) {
    let resultado = n * 3;
    console.log(resultado)
}


