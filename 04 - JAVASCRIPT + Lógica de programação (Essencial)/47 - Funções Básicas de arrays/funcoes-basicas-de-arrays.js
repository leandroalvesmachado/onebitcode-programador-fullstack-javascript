/* push - Adiciona um novo elemento no final de um array */
let hitchedSpaceships1 = ["Colossus", "Elemental", "Helmet"]
hitchedSpaceships1.push("Supernova")
console.log(hitchedSpaceships1) // [ 'Colossus', 'Elemental', 'Helmet', 'Supernova' ]


/* pop - Remove o último elemento do arrays */
let hitchedSpaceships2 = ["Colossus", "Elemental", "Helmet"]
hitchedSpaceships2.pop()
console.log(hitchedSpaceships2) // [ 'Colossus', 'Elemental' ]


/* shift - Remove o primeiro elemento do array */
let hitchedSpaceships3 = ["Colossus", "Elemental", "Helmet"]
hitchedSpaceships3.shift()
console.log(hitchedSpaceships3) // [ 'Elemental', 'Helmet' ]


/* unshift - Adiciona um elemento no começo do array */
let hitchedSpaceships4 = ["Colossus", "Elemental", "Helmet"]
hitchedSpaceships4.unshift("Fenix")
console.log(hitchedSpaceships4) // [ 'Fenix', 'Colossus', 'Elemental', 'Helmet' ]


/* length - Retorna o tamanho do array */
let hitchedSpaceships5 = ["Colossus", "Elemental", "Helmet"]
console.log(hitchedSpaceships5.length) // 3


/* indexOf - Retorna o indice onde encontra-se o elemento, serve para array e strings (posição) */
let hitchedSpaceships6 = ["Colossus", "Elemental", "Helmet"]
let elementalPosElemental = hitchedSpaceships6.indexOf("Elemental")
console.log(elementalPosElemental) // 1, posição 1 do array

let elementalPosGolias = hitchedSpaceships6.indexOf("Golias")
console.log(elementalPosGolias) // -1, isso acontece quando o elemento não é encontrado