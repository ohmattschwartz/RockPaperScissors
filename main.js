const wins = {
  player: 0,
  computer: 0
}

const init = () => {
  document.querySelector('.output h2').textContent = 'Here We Go!'
  document.querySelector('.output img').src = 'images/scissors.png'
  document.querySelector('.output img').className = 'hidden'
  const rockButton = document.querySelector('button.rock')
  const paperButton = document.querySelector('button.paper')
  const scissorsButton = document.querySelector('button.scissors')
  const newButton = document.querySelector('#playagain button')

  rockButton.addEventListener('click', () => {
    playRock()
    checkForWinner()
  })
  paperButton.addEventListener('click', () => {
    playPaper()
    checkForWinner()
  })
  scissorsButton.addEventListener('click', () => {
    playScissors()
    checkForWinner()
  })

  newButton.addEventListener('click', function () {
    resetGame()
  })
}

document.addEventListener('DOMContentLoaded', init)

const compMoves = ['Rock', 'Paper', 'Scissors']

const checkForWinner = () => {
  if (wins.computer >= 3) {
    document.querySelector('.input').className = 'input hidden'
    document.querySelector('.output').textContent = 'You Lost the Match.  Sorry.'
    const newButton = document.querySelector('#playagain button')
    newButton.textContent = 'One More Try?'
    newButton.className = ''
  }

  if (wins.player >= 3) {
    document.querySelector('.input').className = 'input hidden'
    document.querySelector('.output').textContent = 'You Won the Match.  You are a catch and people ought to want to date you.'

    const newButton = document.querySelector('#playagain button')
    newButton.textContent = 'Nicely done!  Play again?'
    newButton.className = ''
  }
}

const resetGame = () => {
  wins.player = 0
  wins.computer = 0
  document.querySelector('.input').className = 'input'
  document.querySelector('#playagain button').className = 'hidden'
  document.querySelector('.output').textContent = 'Here We Go!'
}

let playRock = () => {
  console.log('User Move: Rock')
  let compsRandomNumber = getRandom()
  console.log('Computer move: ', compMoves[compsRandomNumber])
  let compsMove = compMoves[compsRandomNumber]
  if (compsMove === 'Scissors') {
    document.querySelector('.output').textContent = 'You Win!'
    wins.player++
  } else if (compsMove === 'Rock') {
    document.querySelector('.output').textContent = 'You Tie'
  } else if (compsMove === 'Paper') {
    document.querySelector('.output').textContent = 'You Lose!'
    wins.computer++
  }
}

let playPaper = () => {
  console.log('User Move: Paper')
  let compsRandomNumber = getRandom()
  console.log('Computer move: ', compMoves[compsRandomNumber])
  let compsMove = compMoves[compsRandomNumber]
  if (compsMove === 'Rock') {
    document.querySelector('.output').textContent = 'You Win!'
    wins.player++
  } else if (compsMove === 'Paper') {
    document.querySelector('.output').textContent = 'You Tie!'
  } else if (compsMove === 'Scissors') {
    document.querySelector('.output').textContent = 'You Lose'
    wins.computer++
  }
}

let playScissors = () => {
  console.log('User Move: Scissors')
  let compsRandomNumber = getRandom()
  console.log('Computer move: ', compMoves[compsRandomNumber])
  let compsMove = compMoves[compsRandomNumber]
  if (compsMove === 'Rock') {
    document.querySelector('.output').textContent = 'You Lose.'
    wins.computer++
  } else if (compsMove === 'Paper') {
    document.querySelector('.output').textContent = 'You Win!'
    wins.player++
  } else if (compsMove === 'Scissors') {
    document.querySelector('.output').textContent = 'You Tie!'
  }
}

function getRandom () {
  return Math.floor(Math.random() * (3 - 0))
}
