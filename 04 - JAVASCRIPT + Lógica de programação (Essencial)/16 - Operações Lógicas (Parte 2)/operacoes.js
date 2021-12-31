let spaceship = "Elemental"
let velocity = 20

/*
&& (and)
// as duas condições precisam ser verdadeiras para retornar true
*/

// true
console.log(spaceship.length == 9 && velocity > 15)

// false
console.log(velocity > 10 && velocity < 19)

/*
|| (or)
Apenas uma das duas condições precisa ser verdadeira para retornar true
*/

// true
console.log(spaceship.length == 9 || velocity > 15)

// true
console.log(velocity > 10 || velocity < 19)

/*
! (not)
verifica o valor contrario, a negação
*/

// false
console.log(!velocity > 19)