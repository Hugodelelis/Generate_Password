import genPassword from './generators'

const result = document.querySelector('#result')
const caracter = document.querySelector('#caracter')
const addNum = document.querySelector('#addNum')
const upperCase = document.querySelector('#upperCase')
const lowerCase = document.querySelector('#lowerCase')
const simbols = document.querySelector('#simbols')
const gen = document.querySelector('#gen')

export default () => {
    gen.addEventListener('click', () => {
        result.innerHTML = generator()
    })
}

function generator () {
    const password = genPassword(
        caracter.value,
        upperCase.checked,
        lowerCase.checked,
        addNum.checked,
        simbols.checked
    )

    if (password.length < 4 || password.length > 20) return 'Escolha entre 4 e 20 caractéres e pelo menos uma opçao.'

    return password || 'Nada selecionado'
}

