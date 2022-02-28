let spaceshipName = "Supernova"

for (let i = 0; i < spaceshipName.length; i++) {
    if (spaceshipName[i] == "o") {
        // quando encontrar a letra "o", o loop é encerrado
        break;
    } else {
        console.log(spaceshipName[i])
    }
}