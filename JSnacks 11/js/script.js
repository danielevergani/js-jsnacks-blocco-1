var nome = ["paolo", "marco", "giuseppe", "pedro", "franco", "peppino"];

var cognome = ["rossi", "bianchi", "verdi", "nero", "pippo"];

var nuovaLista = [];

if ( nome.length > cognome.length){
    var contatore = cognome.length 
}
else if (nome.length < cognome.length) {
    var contatore = nome.length
}
else{
    var contatore = nome.length
}

for (var i = 0; i<contatore; i++){
    var contatoreNome = Math.floor( Math.random() * nome.length ) ; 
    var contatoreCognome = Math.floor( Math.random() * cognome.length ) ; 

    nuovaLista.push ( nome[contatoreNome] + " " + cognome[contatoreCognome] );
}

console.log(nuovaLista);