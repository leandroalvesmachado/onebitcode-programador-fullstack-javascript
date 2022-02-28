class SpaceshipStation {
    constructor(name, platformsQuantity) {
        this.name = name
        this.platformsQuantity = platformsQuantity
    }
}

let observatory = new SpaceshipStation("Observatório", 40)
console.log(observatory) // SpaceshipStation { name: 'Observatório', platformsQuantity: 40 }


class Spaceship {
    // construtor com valor padrão, caso não passe o valor
    constructor(name, type = "Descoberta") {
        this.name = name
        this.type = type
    }
}

let darwin = new Spaceship("Darwin")
console.log(darwin) // Spaceship { name: 'Darwin', type: 'Descoberta' }

let helmet = new Spaceship("Helmet", "Batalha")
console.log(helmet) // Spaceship { name: 'Helmet', type: 'Batalha' }
