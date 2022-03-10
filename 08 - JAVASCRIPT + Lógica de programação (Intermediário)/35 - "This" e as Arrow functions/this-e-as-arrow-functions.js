testingArrow = {
    name: "Escola de Javascript",
    normalFunction: function() {
        console.log(this.name)
    },
    arrowFunction: () => {
        console.log(this.name)
    }
}

testingArrow.normalFunction()