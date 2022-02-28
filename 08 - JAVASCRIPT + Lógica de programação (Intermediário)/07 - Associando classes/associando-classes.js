class Captain {

    constructor(name, age, flightHours) {
        this.name = name
        this.age = age
        this.flightHours = flightHours
    }
}

class Spaceship {

    constructor(name, crewQuantity, captainName, captainAge, captainFlightHours) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.captain = new Captain(captainName, captainAge, captainFlightHours)
    }
}

let spaceship = new Spaceship("Ártemis", 13, "Will", 45, 15000)

// Spaceship {
//     name: 'Ártemis',
//     crewQuantity: 13,
//     captain: Captain { name: 'Will', age: 45, flightHours: 15000 }
//   }
console.log(spaceship)