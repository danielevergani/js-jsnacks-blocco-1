do{
    var stringaNum = prompt("scrivi un numero di 4 cifre");
} while(stringaNum.length != 4);

var valore = 0;
var totale=0;

for (i=0; i<stringaNum.length; i++){
    // valore=stringaNum.charAt(i);
    valore=parseInt(stringaNum[i]);
    totale =totale+valore;
}

console.log(totale);