function slowDown(velocity, printer) {
    let deceleration = 20

    while (velocity > 0) {
        printer(velocity)
        velocity -= deceleration
    }

    alert("Nave parada. As comportas podem ser abertas.")
}

let spaceshipVelocity = 150

slowDown(spaceshipVelocity, function (velocity) {
    // Velocidade atual: 150
    // Velocidade atual: 130
    // Velocidade atual: 110
    // Velocidade atual: 90
    // Velocidade atual: 70
    // Velocidade atual: 50
    // Velocidade atual: 30
    // Velocidade atual: 10
    console.log("Velocidade atual: " + velocity)
})