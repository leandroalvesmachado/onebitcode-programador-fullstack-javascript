class ResourceProcessStation {
    constructor(name, monthlyProcessedLoad) {
        this.name = name
        this.monthlyProcessedLoad = monthlyProcessedLoad
    }

    get weeklyProcessedLoad() {
        return this.monthlyProcessedLoad / 4
    }
}

let resourceProcessor = new ResourceProcessStation("Gaia", 500)

// ResourceProcessStation { name: 'Gaia', monthlyProcessedLoad: 500 }
console.log(resourceProcessor)

// método get
// 125
console.log(resourceProcessor.weeklyProcessedLoad)

