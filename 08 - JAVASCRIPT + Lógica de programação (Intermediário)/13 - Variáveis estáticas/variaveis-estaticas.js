class Spaceship {
    // simulando variavel estática com o get no js
    static get decelerationRate() {
        return 0.15
    }

    constructor(name) {
        this.name = name
        this.currentVelocity = 0
    }

    speedUp(acceleration) {
        this.currentVelocity += (acceleration * (1 - Spaceship.decelerationRate))
    }
}

let spaceship = new Spaceship("Apollo")
spaceship.speedUp(100)

// Spaceship { name: 'Apollo', currentVelocity: 85 }
console.log(spaceship)