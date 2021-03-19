var squadre = [
    {
        nome: "inter",
        punti: 0,
        falli: 0
    },
    {
        nome: "milan",
        punti: 0,
        falli: 0
    },
    {
        nome: "roma",
        punti: 0,
        falli: 0
    }
];

for ( var i = 0; i < squadre.length; i++ ){
    squadre[i].punti = Math.floor(Math.random() * 100) + 1;
    squadre[i].falli = Math.floor(Math.random() * 10) + 1;
}

console.log(squadre);

var squadre2 = [];
var squadraAggiornata = {};

for (var i = 0; i < squadre.length; i++ ){
    
    var nomeSquadra = squadre[i].nome;
    var falliSubiti = squadre[i].falli;

    console.log(nomeSquadra);
    console.log(falliSubiti);

    squadraAggiornata["nome"] = nomeSquadra;
    squadraAggiornata["falli"] = falliSubiti;
    
    console.log(squadraAggiornata);
}
