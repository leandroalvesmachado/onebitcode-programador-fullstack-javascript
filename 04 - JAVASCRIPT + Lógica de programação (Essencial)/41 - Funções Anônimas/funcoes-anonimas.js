/*

Uma função declarada de forma tradicional, sempre é executada antes da função anônima no código

function name(params) {
    
}

*/

let doubleSpeed = function(velocity) {
    return velocity * 2
}

let newVelocity = doubleSpeed(40)

// 80
console.log(newVelocity)