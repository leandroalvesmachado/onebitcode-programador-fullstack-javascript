// criando objeto, chave e valor
let spaceship = {
    name: "Fenix",
    crewQuantity: 7,
    type: "Batalha"
}

// imprimindo objeto
console.log(spaceship) // { name: 'Fenix', crewQuantity: 7, type: 'Batalha' }

// acessando a propriedade do objeto
console.log(spaceship.type) // Batalha

// outra forma de acessar a propriedade
console.log(spaceship["name"]) // Fenix

// adicionado novas propriedades ao objeto
spaceship.isHitched = false
spaceship["shieldLevel"] = 100


// {
//     name: 'Fenix',
//     crewQuantity: 7,
//     type: 'Batalha',
//     isHitched: false,
//     shieldLevel: 100
// }
console.log(spaceship)

// objeto pode ser criado vazio
let spaceship2 = {}
console.log(spaceship2) // {}

// objeto pode ser criado vazio de outra forma
let spaceship3 = new Object()
console.log(spaceship3) // {}