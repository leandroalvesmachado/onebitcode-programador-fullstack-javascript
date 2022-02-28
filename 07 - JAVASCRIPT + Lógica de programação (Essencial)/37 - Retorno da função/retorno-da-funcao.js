function speedUp(velocity, acceleration) {
    let newVelocity = velocity + acceleration
    
    // Nova velocidade: 85
    console.log("Nova velocidade: " + newVelocity)

    return newVelocity
}

let velocity = 80
let acceleration = 5

// 80
console.log(velocity)

// 85
console.log(speedUp(velocity, acceleration))

velocity = speedUp(velocity, acceleration)

// 85
console.log(velocity)
