let hitchedSpaceShips = ["Deméter", "Darwin", "Supernova", "Fenix", "Puller"]

// forEach
// Não retorna um novo array
hitchedSpaceShips.forEach(function(currentSpaceShip, index) {
    console.log("Nave: " + currentSpaceShip + "\nÍndice: " + index)

    // Nave: Deméter
    // Índice: 0
    // Nave: Darwin
    // Índice: 1
    // Nave: Supernova
    // Índice: 2
    // Nave: Fenix
    // Índice: 3
    // Nave: Puller
    // Índice: 4
})

// map
// Retorna um novo array
let upcasedSpaceships = hitchedSpaceShips.map(function (currentSpaceship, index) {
    let upcased = currentSpaceship.toUpperCase()
    return upcased
})

console.log(upcasedSpaceships) // [ 'DEMÉTER', 'DARWIN', 'SUPERNOVA', 'FENIX', 'PULLER' ]


// filter
// Retorna um novo array filtrado
let with7Chars = hitchedSpaceShips.filter(element => { return element.length >= 7 })

console.log(with7Chars) // [ 'Deméter', 'Supernova' ]


// find
// Retorna um elemento do array, o primeiro encontrado e para a execução
let find7Chars = hitchedSpaceShips.find(element => { return element.length >= 7 })

console.log(find7Chars) // Deméter