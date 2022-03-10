function save() {
    // remove o comportamento padrão do elemento, no caso o form (submit)
    event.preventDefault()
    
    let name = document.querySelector("input[name='name']").value
    let programmingLang = document.querySelector("select[name='programming-lang']").value

    alert("Nome: " + name + "\nLinguagem de Programação: " + programmingLang)
}