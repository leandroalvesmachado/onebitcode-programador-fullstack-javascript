/*
- Também são funções anônimas
*/

const doubleVelocity1 = (velocity) => {
    return velocity * 2
}

// forma reduzida em 1 linha
const doubleVelocity2 = (velocity) => velocity * 2

// forma reduzida em 1 linha quando possui apenas 1 parâmetro
const doubleVelocity3 = velocity => velocity * 2


// 120
console.log(doubleVelocity1(60))

// 120
console.log(doubleVelocity2(60))

// 120
console.log(doubleVelocity3(60))