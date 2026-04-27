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

// escreve texto no paragrafo 'game-message'
function writeMessage(message) {
    const messageParagraph = document.getElementById('game-message')
    messageParagraph.innerHTML = message
}

export {createCirclePicture, createCrossPicture, writeMessage}