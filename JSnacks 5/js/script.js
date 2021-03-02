var stringa = [];
var numero = 0;
for (var i = 0; i<6; i++){
    numero = parseInt(prompt("scrivi un numero"));
    if (isNaN(numero)){
        numero = parseInt(prompt("t'ho detto di scrivere un numero"));
    }
    
    if (numero % 2 != 0){
        stringa.push(numero);
    }
}

for (i=0; i<stringa.length; i++){
    console.log(stringa[i]);
}