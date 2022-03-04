class BattleSpaceship extends Spaceship {
    constructor(name, crewQuantity, weaponsQuantity) {
        super(name, crewQuantity) // reaproveitando atributos e construtor da classe Spaceship
        this.weaponsQuantity = weaponsQuantity
    }
}