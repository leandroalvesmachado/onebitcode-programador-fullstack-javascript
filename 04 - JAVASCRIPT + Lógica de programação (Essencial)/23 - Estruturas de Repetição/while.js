let velocity = 50
let acceleration = 5

while (velocity <= 100) {
    // imprimindo a velocidade até o critério de parada, que é o <= 100
    console.log("Acelerando: Estamos a " + velocity + "km/s")
    
    // velocity += acceleration igual a velocity = velocity + acceleration
    velocity += acceleration 
}

let constellation = "Andromeda"
let pos = 0
let constellationLength = constellation.length

while (pos < constellationLength) {
    // percorrendo a string em cada posição até encontrar a letra "a" ou "A"
    if (constellation[pos] == "a" || constellation[pos] == "A") {
        console.log(pos)
    }

    pos += 1
}