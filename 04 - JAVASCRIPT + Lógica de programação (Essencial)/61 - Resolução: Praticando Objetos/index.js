let spaceship = {
    velocity: 0,
    speedUp: function(acceleration) {
        this.velocity += acceleration
    }
}

function registerSpaceship() {
    spaceship.name = prompt("Infome o nome da nave")
    spaceship.type = prompt("Infome o tipo da nave")
    spaceship.maxVelocity = Number(prompt("Informe a velocidade máxima da nave (km/s)"))
}

function acelerate() {
    let acceleration = Number(prompt("Quando você quer acelerar? (km/s)"))
    spaceship.speedUp(acceleration)

    if (spaceship.velocity > spaceship.maxVelocity) {
        alert("Velocidade máxima ultrapassada!" +
            "\nVelocidade da Nave: " + spaceship.velocity + "km/s" +
            "\nVelocidade máxima da Nave: " + spaceship.maxVelocity + "km/s"
        )
    }
}

function stop() {
    alert("Nome: " + spaceship.name + 
        "\nTipo: " + spaceship.type +
        "\nVelocidade da nave: " + spaceship.velocity +
        "\nMáxima da Nave: " + spaceship.maxVelocity
    )

    spaceship.velocity = 0
}

function showMenu() {
    let chosenOption
    do {
        chosenOption = prompt("Você deseja: \n1 - Acelerar \n2 - Parar")
        switch (chosenOption) {
            case "1":
                acelerate()
                break;
            case "2":
                stop()
                break;
            default:
                alert("Opção inválida")
                break;
        }
    } while (chosenOption != "2")
}

// iniciando aplicação
registerSpaceship()
showMenu()