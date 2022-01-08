let velocity = 110
let acceleration = 5

// o "do" "while" só avalia a condição de parada depois do "do"
// o "while" sem "do", primeira avalia a condição de parada
do {
    // bloco de código
    // Acelerando: estamos a 50km/s
    // Acelerando: estamos a 55km/s
    // Acelerando: estamos a 60km/s
    // Acelerando: estamos a 65km/s
    // Acelerando: estamos a 70km/s
    // Acelerando: estamos a 75km/s
    // Acelerando: estamos a 80km/s
    // Acelerando: estamos a 85km/s
    // Acelerando: estamos a 90km/s
    // Acelerando: estamos a 95km/s
    // Acelerando: estamos a 100km/s
    console.log("Acelerando: estamos a " + velocity + "km/s")
    velocity += acceleration
} while (velocity <= 100); // condição de parada