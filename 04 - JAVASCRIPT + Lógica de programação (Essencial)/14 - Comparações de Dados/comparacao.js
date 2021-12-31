let spacheship = "Golias"
let velocity = 80

// false
console.log(velocity == 90)

// true
console.log(spacheship == "Golias")

// true
// == tipagem fraca ignora o tipo do dado, só verifica o valor
console.log(velocity == "80")

// false
// === verifica o valor e o tipo
console.log(velocity === "80")

// false
// verifica o valor somente
console.log(velocity != "80")

// false
// verifica o valor e o tipo
console.log(velocity !== 80)

// true
console.log(velocity > 70)

// false
// verifica a ordem do texto, ordem alfabetica (se vem depois)
// Palavra Golias vem depois da Helmet
console.log(spacheship > "Helmet")

// true
// verifica a ordem do texto, ordem alfabetica (se vem depois)
console.log(spacheship >= "Golias")

// true
console.log(velocity >= 80)

// true
console.log(velocity < 120)

// true
console.log(velocity <= 120)

// true
// verifica a ordem do texto, ordem alfabetica (se vem antes)
// Palavra Golias vem antes da Helmet
console.log(spacheship < "Helmet")