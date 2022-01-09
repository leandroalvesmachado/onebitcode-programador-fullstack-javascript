// parâmetro "message" com valor padrão
function greetPilot(name, message = "Olá") {
    console.log(message + ", " + name)
}

// Seja bem-vindo, John Mars
greetPilot("John Mars", "Seja bem-vindo")

// Olá, John Mars
greetPilot("John Mars")