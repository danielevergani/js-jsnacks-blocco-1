var lista1 = [1, 2, 3, 4, 5, 6, 7];

var lista2 = [1, 2, 3, 4, 5, 6, 7, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6];

var piuCorto;

var lunghezza;

var uguali = "no";

// if ( lista1.length < lista2.length ){

//     while ( uguali == "no"){

//         lista1.push( Math.floor(Math.random() * 10) + 1 );

//         if ( lista1.length == lista2.length ){
//             uguali = "si";
//         }
//     }
// } 
// else if ( lista1.length > lista2.length ){
//     while ( uguali == "no"){

//         lista2.push( Math.floor(Math.random() * 10) + 1 );

//         if ( lista1.length == lista2.length ){
//             uguali = "si";
//         }
//     }
// }
// else {
//     console.log("sono già uguali");
// }

// console.log(lista2);
// console.log(lista1);


if ( lista1.length < lista2.length ){
    piuCorto = lista1
    lunghezza = lista2.length
}
else if ( lista1.length > lista2.length ){
    piuCorto = lista2
    lunghezza = lista1.length
}
else {
    console.log("sono già uguali");
}

while ( uguali == "no"){

    piuCorto.push( Math.floor(Math.random() * 10) + 1 );

    if ( piuCorto.length == lunghezza ){
        uguali = "si";
    }
}

console.log(piuCorto);
console.log("ora le liste sono uguali")
console.log(lista1);
console.log(lista2);
