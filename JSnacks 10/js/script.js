do{
    var numero = parseInt(prompt("scrivi un numero"))
}while (isNaN(numero));
    
if (numero % 2 == 0){
    console.log(numero);
}
else{
    console.log(numero + 1);
}