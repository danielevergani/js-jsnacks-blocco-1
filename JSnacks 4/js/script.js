var invitati = ["paolo", "federico", "daniele", "giuseppe", "pippo"];
var nome = prompt("dimmi come ti chiami")
var presente;

for (var i = 0; i< invitati.length; i++){
    if (nome == invitati[i]){
        presente = "presente";
    }
}

if (presente == "presente"){
    console.log("puoi entrare");
}
else{
    console.log("rimbalzato");
}