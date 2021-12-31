let velocity = 90

// Estamos numa velocidade aceitável
if (velocity < 100) {
    console.log("Estamos numa velocidade aceitável")
} else {
    console.log("Entrando em velocidade de risco")
}


// Cuidado! Próximo a velocidade de risco
if (velocity < 40) {
    console.log("Velocidade baixa")
} else {
    if (velocity <= 100) {
        console.log("Cuidado! Próximo a velocidade de risco")
    } else {
        console.log("Velocidade de risco!")
    }
}


// Cuidado! Próximo a velocidade de risco
if (velocity < 40) {
    console.log("Velocidade baixa")
} else if (velocity <= 100) {
    console.log("Cuidado! Próximo a velocidade de risco")
} else {
    console.log("Velocidade de risco!")
}


// Velocidade menor que 100
velocity > 100 ? console.log("Velocidade maior que 100") : console.log("Velocidade menor que 100")