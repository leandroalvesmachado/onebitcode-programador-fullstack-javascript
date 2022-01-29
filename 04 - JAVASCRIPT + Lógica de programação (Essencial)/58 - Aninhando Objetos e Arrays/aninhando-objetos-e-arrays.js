let spaceship1 = {
    name: "Supernova",
    type: "Batalha",
    crew: ["Cap. Silva", "Ana Julia", "Thiago"]
}

spaceship1.crew.push("Ten. Fernanda")

/*
{
  name: 'Supernova',
  type: 'Batalha',
  crew: [ 'Cap. Silva', 'Ana Julia', 'Thiago', 'Ten. Fernanda' ]
}
*/
console.log(spaceship1)

// Array de Objetos
let spaceship2 = [
    { name: "Supernova", type: "Batalha" },
    { name: "Colossus", type: "Batalha" },
    { name: "Helmet", type: "Batalha" }
]

console.log(spaceship2[1].name) // Colossus

spaceship2.forEach(spaceship => {
    console.log(spaceship.name)
    /*
        Colossus
        Supernova
        Colossus
        Helmet
    */
})


// Objetos com array de Objetos
let spaceship2 = {
    name: "Supernova",
    type: "Batalha",
    captain: {
        name: "Hugo",
        age: 31
    }
}