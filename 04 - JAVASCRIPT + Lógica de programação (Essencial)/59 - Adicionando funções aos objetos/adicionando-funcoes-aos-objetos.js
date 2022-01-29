let spaceship = {
    // atributos
    name: "Deméter",
    type: "Extração",
    maxCrew: 20,
    // metodos
    turnOn: function() {
        alert("Preparando propulsão")
        alert("Ligando computador de bordo")
    }
}

// chama e executa os alerts
// spaceship.turnOn()

spaceship.velocity = 0

// spaceship.speedUp = function(spaceshipToSpeedUp, acceleration) {
//     spaceshipToSpeedUp.velocity += acceleration
// }

// melhorando função com o this
spaceship.speedUp = function(acceleration) {
    // this referencia o proprio objeto, nesse caso o spaceship
    this.velocity += acceleration
}

/*
{
  name: 'Deméter',
  type: 'Extração',
  maxCrew: 20,
  turnOn: [Function: turnOn],
  velocity: 0,
  speedUp: [Function]
}
*/
console.log(spaceship)

// alterando chamada
// spaceship.speedUp(spaceship, 10)

spaceship.speedUp(10)

/*
Aceleração mudou devido a chamada da função speedUp
{
  name: 'Deméter',
  type: 'Extração',
  maxCrew: 20,
  turnOn: [Function: turnOn],
  velocity: 10,
  speedUp: [Function]
}
*/
console.log(spaceship)