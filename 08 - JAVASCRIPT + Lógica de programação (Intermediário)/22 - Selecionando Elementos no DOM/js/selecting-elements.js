function show() {
    let name = document.getElementById('name')
    console.log(name) // retorna o elemento html que possui o id name
    console.log(name.value) // retorna o valor do elemento html que possui o id name

    let elements1 = document.getElementsByName('phone')
    console.log(elements1) // retorna o(s) elemento(s) html que possui o name igual a phone
    console.log(elements1[0].value) // retorna o(s) valor(es) do(s) elemento(s) html que possui o name igual a phone

    let elements2 = document.querySelectorAll("div#phones input[name='phone']")
    console.log(elements2) // retorna o(s) elemento(s) html que possui o name igual a phone dentro da div #phones
    console.log(elements2[1].value) // retorna o(s) valor(es) do(s) elemento(s) html que possui o name igual a phone dentro da div #phones

    let elements3 = document.getElementsByTagName("input")
    console.log(elements3) // retorna todos os elementos do tipo input da pagina html
}