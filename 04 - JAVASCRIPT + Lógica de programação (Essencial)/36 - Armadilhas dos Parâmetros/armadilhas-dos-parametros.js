// por padrão um parâmetro tem o valor undefined
function greetPilot(name, message = "Olá") {
    console.log(message + ", " + name)
}

// Olá, John Mars
greetPilot("John Mars")

// Olá, undefined
greetPilot()


// ideal é sempre deixar os parâmetros com valores definidos como último parâmetro
function speedUp(velocity, unit = "km/s", acceleration) {
    let newVelocity = velocity + acceleration

    console.log("Nova velocidade: " + newVelocity + unit)
}

function speedUpFinal(velocity, acceleration, unit = "km/s") {
    let newVelocity = velocity + acceleration

    console.log("Nova velocidade: " + newVelocity + unit)
}

// Nova velocidade: 70mi/s
speedUp(50, "mi/s", 20)

// Nova velocidade: 90km/s
speedUpFinal(50, 40)