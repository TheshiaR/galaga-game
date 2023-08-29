import { Player } from "./player.js"
import { Enemy } from "./enemy.js"

var board = document.getElementById('main-board')
var player = new Player(225, 750, board)
 
player.insertPlayer()

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

function start() {
  var timerId = setInterval(player.move, 30)
  var timerId2 = setInterval(createEnemy , 2000)
}

function createEnemy() {
  //var xRandom = Math.floor(Math.random() * 450) // Version completamente random
  var xRandom = Math.floor(Math.random() * 10) * 50   // versión arcade
  var enemy = new Enemy(xRandom, 0, board)
  enemy.insertEnemy()
  console.log(xRandom)
}

start()