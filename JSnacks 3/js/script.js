var i = 0;
var valore = 0;
var tot = 0;
for (i=0; i<10; i++){
    valore = parseInt(prompt("inserisci un numero"));
    console.log(valore);
    tot = tot + valore;
}

console.log("il totale è " + tot);