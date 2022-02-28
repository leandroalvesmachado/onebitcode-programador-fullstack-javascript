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

    constructor(name, maxCrew, maxRecommendedVelocity, maxLoadWeight) {
        // método super
        // reaproveitando os this
        // this.name = name
        // this.maxCrew = maxCrew
        // this.maxRecommendedVelocity = maxRecommendedVelocity
        // chama o construtor da classe Spaceship primeiro + o da classe TransportSpaceship
        super(name, maxCrew, maxRecommendedVelocity)
        this.maxLoadWeight = maxLoadWeight
    }

    speedUp(acceleration) {
        acceleration /= 2 // acceleration = acceleration / 2
        alert("Incrementando velocidade em " + acceleration + "Km/s")

        // metodo super, chama sempre a classe que extends
        // chamando método speedUp da classe Spaceship
        super.speedUp(acceleration)
    }
}

let transportSpaceship = new TransportSpaceship("Transportadora", 4, 100, 400)

// TransportSpaceship {
//     name: 'Transportadora',
//     maxCrew: 4,
//     maxRecommendedVelocity: 100,
//     currentVelocity: 0,
//     maxLoadWeight: 400
// }
console.log(transportSpaceship)

transportSpaceship.speedUp(210)

