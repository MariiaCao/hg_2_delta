/*
    HACK-9
    agregar tú alias al inicio
    [100,200,300,400,500,600,700]  result >  [foo,100,200,300,400,500,600,700]
*/

let array = [100,200,300,400,500,600,700];
console.log(array);
console.log('\n');
array.unshift('delta');
console.log(array);