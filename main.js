const form = document.getElementById('form-compara-numeros')
const primeiroNum = document.getElementById('primeiro-numero')
const segundoNum = document.getElementById('segundo-numero')
let formEhValido = false


function validaMaior(primeiroInput, segundoInput){
    const numeroEhMaior = parseInt(primeiroInput) < parseInt(segundoInput)
    return numeroEhMaior
}

// será desparado toda vez que tiver um submit no formulário
// tirar o reload do submit
// recuperando as informações do formulário
form.addEventListener('submit', function(e){
    e.preventDefault()

    const mensagemSucesso = `O primeiro valor é menor que o segundo: ${primeiroNum.value} < ${segundoNum.value}`

    formEhValido = validaMaior(primeiroNum.value, segundoNum.value)
    if(formEhValido) {
        const containerMensagemSucesso = document.querySelector('.success-message')
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = 'block'
        segundoNum.classList.remove('error')
        document.querySelector('.error-message').style.display = 'none'
        

        //limpar os campos após submeter
        primeiroNum.value = ""
        segundoNum.value  = ""
    }else {
        document.querySelector('.error-message').style.display = 'block'
        segundoNum.classList.add('error')
        document.querySelector('error-message').style.display = 'block'
    }

})

