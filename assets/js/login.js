let input = document.querySelector(".login-input")
let button = document.querySelector(".login-button")
let form = document.querySelector(".login-form")

const validateInput = ({ target }) => {
    if(target.value.length >= 3){
        button.removeAttribute('disabled')
        return;
    }
        button.setAttribute('disabled', '')
    
}

// preventDefault para não recarregar o form no envio do formulado.

const handleSubmit = (event) => {
    event.preventDefault()
    
    localStorage.setItem('player', input.value)
    window.location = '/assets/pages/game.html'
}

input.addEventListener('input', validateInput)
form.addEventListener('submit', handleSubmit)