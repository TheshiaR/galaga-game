var board = document.getElementById('main-board')
var player = new Player(225, 750)

function Player(x, y) {
  this.x = x
  this.y = y
  this.direction = 0
  this.speed = 50
  this.sprite

  this.insertPlayer = function() {
    var newPlayer = document.createElement('div')
    newPlayer.setAttribute('id', 'player')
    newPlayer.style.left = this.x + 'px'
    newPlayer.style.top = this.y + 'px'
    this.sprite = newPlayer
    board.appendChild(this.sprite)
  }

  this.move = function() {
    this.x = this.x + this.speed * this.direction
    this.sprite.style.left = this.x + 'px'
  }
}

player.insertPlayer()

window.addEventListener('keydown', function(e) {
  switch (e.key) {
    case 'a':
      player.direction = -1
      break
    case 'd':
      player.direction = 1
      break
    default :
      player.direction = 0
  }
  player.move()
})