const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)

const genUpper = () => String.fromCharCode(rand(65, 91))

const genLower = () => String.fromCharCode(rand(97, 123))

const genNum = () => String.fromCharCode(rand(48, 58))

const simbols = ',.;@#$%¨&*()=_!|\/><+-'

const genSimbol = () => simbols[rand(0, simbols.length)]

export default function genPassword(qtd, upper, lower, num, simbol) {
    const passwordArray = []
    qtd = Number(qtd)

    for(let i =0; i < qtd; i++) {
        upper && passwordArray.push(genUpper())
        lower && passwordArray.push(genLower())
        num && passwordArray.push(genNum())
        simbol && passwordArray.push(genSimbol())
    }

    return passwordArray.join('').slice(0, qtd)
}
