import './style'

import { createCirclePicture, createCrossPicture, writeMessage } from "./graphics"

// elementos html
const boardSpaces = document.getElementsByClassName('space')
const resetButton = document.getElementById('reset-button')

// condições de vítoria
const victoryConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// estado do jogo
var running = false
var currentTurn = 'X'

// tabuleiro
var board = ['','','','','','','','','']

// iniciar o jogo
function main() {

    reset()
    
    Array.from(boardSpaces).forEach((space) => {
        space.addEventListener('click', spaceClicked)
    })

    resetButton.addEventListener('click', reset)

}

// atualizar espaço
function updateSpace(index, symbol) {

    const space = boardSpaces[index]

    space.innerHTML = ''

    if(symbol == 'X') {
        
        const crossPicture = createCrossPicture()
        space.appendChild(crossPicture)

        board[index] = 'X'

    } else if(symbol == 'O') {
        
        const circlePicture = createCirclePicture()
        space.appendChild(circlePicture)

        board[index] = 'O'
    
    }

}

// muda turno
function changeTurn() {

    currentTurn = (currentTurn == 'X')? 'O' : 'X'
    writeMessage(`<strong>Turno:</strong> agora é a vez do ${currentTurn} de jogar!`)

}

// trata o clique no espaço
function spaceClicked() {
    
    if(!running) return;

    var index = Number(this.getAttribute('index'))
    console.log(index)

    if(board[index] == '') {

        board[index] = currentTurn
        updateSpace(index, currentTurn)
        changeTurn()
        checkVictory()

    }

}

// checa condição de vítoria
function checkVictory() {

    for(var i = 0; i < victoryConditions.length; i++) {

        const conditions = victoryConditions[i]

        var spaceA = board[conditions[0]]
        var spaceB = board[conditions[1]]
        var spaceC = board[conditions[2]]

        if(spaceA == '' || spaceB == '' || spaceC == '') {
        
            continue
        
        } else if(spaceA == spaceB && spaceB == spaceC) {

            running = false

            writeMessage(`<strong>Vítoria:</strong> ${spaceA} venceu!`)

            break

        }

    }

}

// reseta o jogo
function reset() {
    
    board = ['', '', '', '', '', '', '', '', '']

    currentTurn = 'X'

    running = true

    Array.from(boardSpaces).forEach((space) => {
        space.innerHTML = ''
    })

    writeMessage(`<strong>Turno:</strong> agora é a vez do ${currentTurn} de jogar!`)

}

main()