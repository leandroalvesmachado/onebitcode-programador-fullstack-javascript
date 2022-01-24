/* splice */
// Altera o array original
let spaceshipNames1 = ["Elemental", "Darwin", "Artemis", "Supernova"]

// Removeu o elemento da posição 1 e 2 do array, e adicionou 3 novos itens
removedSpaceships = spaceshipNames1.splice(1, 2, "Deméter", "Puller", "Golias")

// console.log(spaceshipNames) // [ 'Elemental', 'Deméter', 'Puller', 'Golias', 'Supernova' ]


/* slice */
// Não altera o array original
let spaceshipNames2 = ["Elemental", "Darwin", "Artemis", "Supernova"]

extractedNames = spaceshipNames2.slice(1, 3)

console.log(spaceshipNames2) // [ 'Elemental', 'Darwin', 'Artemis', 'Supernova' ]

console.log(extractedNames) // [ 'Darwin', 'Artemis' ]




