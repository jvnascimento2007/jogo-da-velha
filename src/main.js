import './style.css'
import './tablet-768px.css'

// importa imagem do background
import backgroundImage from './assets/background.jpeg'
// adiciona a imagem no estilo
document.getElementsByTagName('main')[0].style.backgroundImage = `url(${backgroundImage})`

// importa imagens dos simbolos (x e circulo)
import crossSmallImage from './assets/cross-s.png'
import crossLargeImage from './assets/cross-l.png'
import circleSmallImage from './assets/circle-s.png'
import circleLargeImage from './assets/circle-l.png'

// cria elemento html do circulo
function createCirclePicture() {
    const circlePicture = document.createElement('picture')

    const circleSource = document.createElement('source')
    circleSource.media = '(min-width: 768px)'
    circleSource.srcset = circleLargeImage

    circlePicture.appendChild(circleSource)

    const circleImg = document.createElement('img')
    circleImg.src = circleSmallImage

    circlePicture.appendChild(circleImg)

    return circlePicture
}

// cria elemento html do x
function createCrossPicture() {
    const crossPicture = document.createElement('picture')

    const crossSource = document.createElement('source')
    crossSource.media = '(min-width: 768px)'
    crossSource.srcset = crossLargeImage

    crossPicture.appendChild(crossSource)

    const circleImg = document.createElement('img')
    circleImg.src = crossSmallImage

    crossPicture.appendChild(circleImg)

    return crossPicture
}

// desenha os simbolos no jogo da velha
function drawBoard(symbols) {
    // pega os elementos dos espaços do jogo da velha
    const boardSpaces = document.getElementsByClassName('space')
    // itera cada um deles colocando os respectivos simbolos de 'symbols'
    Array.from(boardSpaces).forEach((space, index) => {
        if(symbols[index] == 'X') {
            const crossPicture = createCrossPicture()
            space.appendChild(crossPicture)
        } else if(symbols[index] == 'O') {
            const circlePicture = createCirclePicture()
            space.appendChild(circlePicture)
        }
    })
}

// escreve texto no paragrafo 'game-message'
function writeMessage(message) {
    const messageParagraph = document.getElementById('game-message')
    messageParagraph.innerHTML = message
}

// código para testar funções
var symbols = [
    'X', 'O', 'X',
    'O', 'X', ' ',
    'X', ' ', 'O'
]

writeMessage('Olá, Mundo!')
drawBoard(symbols)