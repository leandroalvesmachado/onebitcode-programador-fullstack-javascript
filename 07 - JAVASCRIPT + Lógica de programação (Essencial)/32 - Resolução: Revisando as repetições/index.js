let spaceshipName = prompt("Qual é o nome da nave?")

let invertedName = ""

for (let i = spaceshipName.length -1; i >= 0; i--) {
    
    // caractere proibido
    if (spaceshipName[i] == "e") {
        break
    }

    invertedName += spaceshipName[i]
}

// console.log("invertedName: " + invertedName)

alert("Nome original da nave: " + spaceshipName + "\nNome após ocultação: " + invertedName)