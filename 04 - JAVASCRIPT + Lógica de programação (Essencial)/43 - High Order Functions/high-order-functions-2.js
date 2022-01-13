function doubleVelocity(velocity, printer) {
    console.log("Entrei em doubleVelocity")

    let newVelocity = velocity * 2

    printer(newVelocity)

    return newVelocity
}

// printer callback

let anotherVelocity = doubleVelocity(50, velocity => {
    console.log("Outra velocidade: " + velocity);
})

// Entrei em doubleVelocity
// Outra velocidade: 100