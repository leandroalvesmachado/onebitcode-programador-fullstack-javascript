// VAR vs LET vs CONST

// var - possivel redeclarar a variavel
// var - acessivel fora do escopo (bloco) quando declarada, problema de consumo de memoria tambem

// let - não é possível redeclarar a variável
// let - variável acessível somente dentro do escopo quando declarada (bloco)
// let - melhor usar o let do que o var (boas praticas de programação)

// const - não é possível atribuir novamente valor a variável

/*

Escopo global, acessado de qualquer lugar

*/
let spaceshipName = "Supernova"

function changeSpaceshipName() {
    spaceshipName = "Elemental"
}

// Supernova
console.log(spaceshipName)
changeSpaceshipName()
// Elemental
console.log(spaceshipName)


/*

spaceshipVelocity is not defined
variável não acessível, escopo local

*/
function startSpaceshipVelocity() {
    let spaceshipVelocity = 0
}

startSpaceshipVelocity()

console.log(spaceshipVelocity)


/*
*/
function setSpaceshipDetails() {
    let velocity = 50

    if (velocity == 50) {
        velocity = 60
        var spaceshipName = "Elemental"
        let spaceshipType = "Discovery"
    }

    console.log(velocity)
    console.log(spaceshipName)
    console.log(spaceshipType)
}

setSpaceshipDetails()
