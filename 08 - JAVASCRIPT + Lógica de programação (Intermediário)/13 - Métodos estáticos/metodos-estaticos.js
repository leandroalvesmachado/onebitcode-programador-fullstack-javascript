class ResourceProcessorStation {
    constructor(name, monthlyProcessing) {
        this.name = name
        this.monthlyProcessing = monthlyProcessing
    }

    // método estático
    static calculateProcessInHours(monthlyProcessing, hours) {
        return monthlyProcessing / 720 * hours
    }
}

// método estático pode chamar sem a necessidade de uma instância da classe
// método estático não consegue ser invocado quando é uma instância
let totalProcessing = ResourceProcessorStation.calculateProcessInHours(500, 6)

// 4.166666666666666
console.log(totalProcessing)