let spaceship = "Helmet"
let newSpaceship = ""

// troca a letra "e" por "i" da palavra "Helmet"
for (let i = 0; i < spaceship.length; i++) {
    if (spaceship[i] == "e") {
        newSpaceship += "i"
    } else {
        newSpaceship += spaceship[i]
    }
}

// Hilmit
console.log(newSpaceship)