do{
var numero = prompt("inserisci un numero");
}while (isNaN(numero));


var potenza;
for (i=1; i<=numero; i++){
    potenza = i*i*i;
    console.log(potenza);
}

for (i=1; i<=numero; i++){
    potenza=Math.pow(i, 3);
    console.log(potenza);
}
