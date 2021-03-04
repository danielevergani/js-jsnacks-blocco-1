var nome = ["paolo", "marco", "giuseppe", "pedro", "franco", "peppino"];

var nomeInvitato = prompt("come ti chiami");

var presente = false

var i = 0;

while ( presente == false && i<nome.length){
    
    if  (nomeInvitato == nome[i] ) {
        presente = true
        console.log("entra")
    }  
    
    i++;
}

if (presente ==false){
    console.log("non puoi entrare");
}