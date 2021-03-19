var biciclette = [
    {
        marca: "bianchi",
        colore: "bianco",
        peso: 4000
    },
    {
        marca: "coppi",
        colore: "rosso",
        peso: 3000
    },
    {
        marca: "graziella",
        colore: "rosso",
        peso: 5000
    }
];

var peso = biciclette[0].peso;
var marca;



for ( var i = 0; i < biciclette.length; i++ ){

    if ( biciclette[i].peso < peso){
        var peso = biciclette[i].peso;
        var marca = biciclette[i].marca
    }

}

console.log("la bici che pesa meno è della " + marca + " e pesa " + peso);