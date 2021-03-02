// inserisci numero 1
var num1 = parseInt( prompt ("inserisci un numero"));
// inserisci numero 
var num2 = parseInt( prompt ("inserisci un secondo numero"));

if (num1 == num2){
    alert("hai inserito " + num2 + " i numeri devono essere diversi, reinseriscilo");
    num2 = parseInt( prompt ("reinserisci il numero 2"));
}

// verifica maggiore e stampalo

if (num1 > num2){
    console.log("il numero maggiore è " + num1 );
}
else{
    console.log("il numero maggiore è " + num2 );
}