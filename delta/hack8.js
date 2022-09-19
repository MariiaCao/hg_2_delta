/*
    HACK-8 
    agregar tú alias al final
    [100,200,300,400,500,600,700]  result >  [100,200,300,400,500,600,700,foo]
*/

let array = [100,200,300,400,500,600,700];
console.log(array);
console.log('\n');
array.push('delta');
console.log(array);