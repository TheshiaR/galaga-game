import { Player } from "./player.js"
import { Enemy } from "./enemy.js"

var board = document.getElementById('main-board')
var player = new Player(225, 750, board)
var enemy1 = new Enemy(50, 0, board)
 
player.insertPlayer()
enemy1.insertEnemy()

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