import { Player } from "./player.js"
import { Enemy } from "./enemy.js"
import { Bullet } from "./bullet.js"

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
    case ' ':
      var bullet = new Bullet(player.x + 20, player.y - 10, board)
      bullet.insertBullet()
      break
  }
})

window.addEventListener('keyup', function() {
  player.direction = 0
})

function start() {
  var timerId = setInterval(playerMovement, 30)
  var timerId2 = setInterval(createEnemy , 2000)
}

function playerMovement() {
  if(player.isDead) {
    //alert('Game Over')
    //gameOver()
  }
  player.move()
}

/* function gameOver() {
  //mostrar carátula de game over
  //limpiar el board
  //reiniciar el juego
} */

function createEnemy() {
  //var xRandom = Math.floor(Math.random() * 450) // Version completamente random
  var xRandom = Math.floor(Math.random() * 10) * 50   // versión arcade
  var enemy = new Enemy(xRandom, 0, board, player)
  enemy.insertEnemy()
}

start()