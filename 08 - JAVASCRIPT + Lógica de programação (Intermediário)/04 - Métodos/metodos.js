class Spaceship {
    constructor(name) {
        this.name = name
        this.velocity = 0
    }

    // criando método
    speedUp(acceleration) {
        this.velocity += acceleration
    }
}

let artemis = new Spaceship("Ártemis")

console.log(artemis) // Spaceship { name: 'Ártemis', velocity: 0 }

// executando método speedUp 2 vezes
artemis.speedUp(10)
artemis.speedUp(15)

// o metodo incrementou o atributo velocity
console.log(artemis) // Spaceship { name: 'Ártemis', velocity: 25 }
