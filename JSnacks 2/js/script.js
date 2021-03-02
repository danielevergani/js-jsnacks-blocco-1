var parola1 = prompt("scrivi una parola");

var parola2 = prompt("scrivi un'altra parola");

if (parola1.length > parola2.length){
    console.log(parola1);
    console.log(parola2);
}
else if (parola1.length < parola2.length) {
    console.log(parola2);
    console.log(parola1);
}
else{
    console.log("le parole hanno stessa lunghezza");
}