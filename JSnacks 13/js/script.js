var lista1 = [1, 2, 3, 4, 5, 6, 7];

var lista2 = [1, 2, 3, 4, 5, 6, 7, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6];

var uguali = "no";

if ( lista1.length < lista2.length ){

    while ( uguali == "no"){

        aggiunta = Math.floor(Math.random() * 10) + 1;
        lista1.push(aggiunta);

        if ( lista1.length == lista2.length ){
            uguali = "si";
        }
    }
} 
else if ( lista1.length > lista2.length ){
    while ( uguali == "no"){

        aggiunta = Math.floor(Math.random() * 10) + 1;
        lista2.push(aggiunta);

        if ( lista1.length == lista2.length ){
            uguali = "si";
        }
    }
}
else {
    console.log("sono già uguali");
}

console.log(lista2);
console.log(lista1);
