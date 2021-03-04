var numeri = [1, 34, 32, 6, 8, 2,];

var totale = 0;

for ( var i = 0; i<numeri.length; i++){
    if ( i % 2 != 0 ){
        totale += numeri[i]
    }
}

console.log(totale);

// utente inserisce numeri

var numeri2 = [];

var numeroAggiunta = 0;

var totale2 = 0;

var continua = "si";

while (continua == "si"){

    do{
    numeroAggiunta = parseInt(prompt("scrivi un numero"));
    } while ( isNaN(numeroAggiunta) );

    numeri2.push(numeroAggiunta);
    console.log(numeri2);
    continua = prompt("se vuoi aggiungere ancora un numero scrivi si").toLowerCase();
    
}

console.log(numeri2);

for ( var j = 0; j<numeri2.length; j++){
    if ( j % 2 != 0 ){
        totale2 += numeri2[j]
    }
}

console.log(totale2);