const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwth", 15, false]
]

let crewGreaterThan9 = hitchedSpaceships.filter(spaceship => {
    // Exemplo dos indices no array
    // spaceship[0] = Fenix
    // spaceship[1] = 8
    // spaceship[2] = true

    return spaceship[1] > 9
}).map(spaceship => { // chamando métodos de forma encadeada
    // aplicando o map em cima do resultado do filter
    // // [ [ 'Golias', 10, true ], [ 'Darwth', 15, false ] ]
    // retornando o nome das naves a partir do resultado da função filter
    return spaceship[0]
})

console.log(crewGreaterThan9) // [ 'Golias', 'Darwth' ]

let ongoingHitchPlatform = hitchedSpaceships.findIndex(spaceship => {
    return spaceship[2] == false
})

console.log(ongoingHitchPlatform) // 2

let highlightedSpaceships = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase()
})

console.log(highlightedSpaceships) // [ 'FENIX', 'GOLIAS', 'HELMET', 'ELEMENTAL', 'DARWTH' ]

// join = concatenar elementos com uma string
let message = "Espaçonaves com mais de 9 tripulantes: " + crewGreaterThan9.join(", ")
message += "\nPlataforma com processo de engate: " + (ongoingHitchPlatform + 1)
message += "\nEspaçonaves destacadas: " + highlightedSpaceships.join(", ")

// Espaçonaves com mais de 9 tripulantes: Golias, Darwth
// Plataforma com processo de engate: 3
// Espaçonaves destacadas: FENIX, GOLIAS, HELMET, ELEMENTAL, DARWTH
console.log(message)

alert(message)

