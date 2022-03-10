class Spaceship {
    constructor(name, maxCrew, maxRecommendedVelocity) {
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommendedVelocity = maxRecommendedVelocity
        this.currentVelocity = 0
    }

    speedUp(acceleration) {
        this.currentVelocity += acceleration

        if (this.currentVelocity > this.maxRecommendedVelocity) {
            alert("Velocidade máxima ultrapassada!!\nDiminua ou poderá gerar danos à nave.")
        }
    }
}

class TransportSpaceship extends Spaceship {

    // sobrescrita do método
    speedUp() {
        // alert('Naves de transporte só aumentam a velocidade em 1km/s')
        this.currentVelocity += 1
    }
}

let transportSpaceship = new TransportSpaceship("Transportadora", 4, 100)

// TransportSpaceship {
//     name: 'Transportadora',
//     maxCrew: 4,
//     maxRecommendedVelocity: 100,
//     currentVelocity: 0
//   }
console.log(transportSpaceship)

// vai executar o speedUp da classe TransportSpaceship
// sobrescrita do método
transportSpaceship.speedUp()

// TransportSpaceship {
//     name: 'Transportadora',
//     maxCrew: 4,
//     maxRecommendedVelocity: 100,
//     currentVelocity: 1 (Mudou)
//   }
console.log(transportSpaceship)