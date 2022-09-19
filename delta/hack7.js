/*
    HACK-7
    reemplazar el item 300 por tú alias
    [100,200,300,400,500,600,700]  result >  [100,200,foo,400,500,600,700]
*/

let array = [100,200,300,400,500,600,700];
console.log(array);
console.log('\n');
array.splice(2,1,'delta');
console.log(array);