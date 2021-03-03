var stringaNum = prompt("scrivi un numero di 4 cifre");
var valore;
var totale=0
for (i=0; i<stringaNum.length; i++){
    valore=stringaNum.charAt(i);
    valore=parseInt(valore);
    totale =totale+valore;
    
}

console.log(totale);