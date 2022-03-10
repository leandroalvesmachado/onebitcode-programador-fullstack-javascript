testingArrow = {
    name: "Escola de Javascript",
    // o this (objeto) age diferente do normalFunction e arrowFunction
    normalFunction: function() {
        console.log(this.name)
    },
    arrowFunction: () => {
        // this.name não "pega" o valor, pois esta fora do contexto a variável
        console.log(this.name)
    }
}

testingArrow.normalFunction()