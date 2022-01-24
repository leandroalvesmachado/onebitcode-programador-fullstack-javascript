let spacialStation = {
    name: "Fox",
    platformsQuantity: 10, // recomendação, utilizar esse formato para as chaves
    "new name": "Estelar",
    true: false,
    2: "Descoberta"
}

// error
// console.log(spacialStation.2)

// assim funciona
console.log(spacialStation[2]) // Descoberta

// assim funciona
console.log(spacialStation["new name"]) // Estelar