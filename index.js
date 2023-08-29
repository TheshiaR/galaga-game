import { Player } from "./player.js"

var board = document.getElementById('main-board')
var player = new Player(225, 750, board)


player.insertPlayer()

var timerId = setInterval(player.move, 30)

window.addEventListener('keydown', function(e) {
  switch (e.key) {
    case 'a':
      player.direction = -1
      break
    case 'd':
      player.direction = 1
      break
  }
})

window.addEventListener('keyup', function() {
  player.direction = 0
})