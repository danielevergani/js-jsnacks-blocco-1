var base = 2;
var esponente = 0;
var risultato = 0;
while (risultato<1000) {
    risultato = Math.pow(base, esponente);
    if (risultato > 1000){
        break;
    }
    console.log(risultato);
    esponente += 1;
}