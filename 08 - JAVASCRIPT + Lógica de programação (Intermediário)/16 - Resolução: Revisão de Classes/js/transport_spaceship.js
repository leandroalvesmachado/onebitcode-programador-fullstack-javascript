class TransportSpaceship extends Spaceship {
    constructor(name, crewQuantity, sitsQuantity) {
        super(name, crewQuantity) // reaproveitando atributos e construtor da classe Spaceship
        this.sitsQuantity = sitsQuantity
    }
}