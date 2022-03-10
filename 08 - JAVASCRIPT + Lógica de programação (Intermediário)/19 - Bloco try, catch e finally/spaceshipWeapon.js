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

    reload() {
        this.shotsLeft = 5
    }
}

let fenixWeapon = new SpaceshipWeapon(10)

try {
    fenixWeapon.shoot() // -1 tiro
    fenixWeapon.shoot() // -1 tiro
    fenixWeapon.shoot() // -1 tiro
    fenixWeapon.shoot() // -1 tiro
    fenixWeapon.shoot() // -1 tiro
    fenixWeapon.shoot() // -1 tiro
} catch (e) {
    console.log(e.message)
    fenixWeapon.reload()
} finally {
    console.log("Arma deu bons tiros");
}

// SpaceshipWeapon { identifier: 10, shotsLeft: 5 }
console.log(fenixWeapon)

