function sayMyFirstName(element) {
    console.log(element)
    alert("Meu primeiro nome é " + element.value)
}

function sayMyLastName() {
    // event = variavel global do navegador para os eventos chamados
    console.log(event)
    alert("Meu último nome é " + event.target.value)
}