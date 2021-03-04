var numero = 0;
var totale = 0;

for (var i = 0; i<5; i++){
    numero = parseInt(prompt("scrivi un numero"));
    if (isNaN(numero)){
        while(isNaN(numero)){
            numero = parseInt(prompt("scrivi un numero"));
        }
        totale += numero;
    }
    else{
        totale += numero;
    }
    console.log(numero);
}

console.log(totale);

var totale2 = 0;
var j = 0;
do{
    numero = parseInt(prompt("scrivi un numero"));
    if (isNaN(numero)){
        while(isNaN(numero)){
            numero = parseInt(prompt("scrivi un numero"));
        }
        totale2 += numero;
    }
    else{
        totale2 += numero;
    }
    console.log(numero);
    j++
}while (j <5);

console.log(totale2);