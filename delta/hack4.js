/*
    HACK-4
    eliminar los items 300 y 500
    [100,200,300,400,500,600,700]  result >  [100,200,400,600,700]
*/

let array = [100,200,300,400,500,600,700];
console.log(array);
console.log('\n');
array.splice(2,1);
array.splice(3,1);
console.log(array);