// todas as classe sem extends, herdam por padrão da classe Object

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

class BattleSpaceship extends Spaceship {
    stop() {
        this.currentVelocity = 0
        alert("Recolhendo armas e parando nave de batalha")
    }
}

class DiscoverySpaceship extends Spaceship {
    stop() {
        this.currentVelocity = 0
        alert("Recolhendo equipamentos de amostras e parando nave de descoberta")
    }
}

let darwin = new DiscoverySpaceship("Darwin", 10, 200)
let fenix = new BattleSpaceship("Fenix", 8, 240)

// DiscoverySpaceship {
//     name: 'Darwin',
//     maxCrew: 10,
//     maxRecommendedVelocity: 200,
//     currentVelocity: 0
//   }
  
console.log(darwin)

// BattleSpaceship {
//     name: 'Fenix',
//     maxCrew: 8,
//     maxRecommendedVelocity: 240,
//     currentVelocity: 0
//   }
console.log(fenix)

darwin.speedUp(210)
fenix.speedUp(230)

darwin.stop()
fenix.stop()