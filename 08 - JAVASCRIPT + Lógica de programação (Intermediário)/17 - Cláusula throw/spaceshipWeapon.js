class SpaceshipWeapon {
    constructor(identifier) {
        this.identifier = identifier
        this.shotsLeft = 5
    }

    shoot() {
        if (this.shotsLeft > 0) {
            console.log("Bang!")
            this.shotsLeft -= 1
        } else {
            // Error: Arma 10 sem munição
            throw new Error("Arma " + this.identifier + " sem munição")
        }
    }
}

let fenixWeapon = new SpaceshipWeapon(10)
fenixWeapon.shoot() // -1 tiro
fenixWeapon.shoot() // -1 tiro
fenixWeapon.shoot() // -1 tiro
fenixWeapon.shoot() // -1 tiro
fenixWeapon.shoot() // -1 tiro
fenixWeapon.shoot() // -1 tiro

// SpaceshipWeapon { identifier: 10, shotsLeft: -1 }
console.log(fenixWeapon)