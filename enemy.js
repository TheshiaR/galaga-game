function Enemy (x, y, board, player, enemies) {
  var self = this
  this.x = x
  this.y = y
  this.height = 50
  this.width = 50
  this.speed = 10
  this.sprite

  this.insertEnemy = function() {
    var newEnemy = document.createElement('div')
    newEnemy.classList.add('enemy')
    newEnemy.style.left = this.x + 'px'
    newEnemy.style.top = this.y + 'px'
    this.sprite = newEnemy
    board.appendChild(this.sprite)
  }

  this.move = function() {
    self.checkCollision()
    self.y = self.y + self.speed
    self.sprite.style.top = self.y + 'px'
    if(self.y >= 760) {
      self.removeEnemy()
    }
  }

  this.timerId = setInterval(this.move, 100)

  this.removeEnemy = function() {
    board.removeChild(this.sprite)
    clearInterval(this.timerId)
    enemies.shift()
  }

  this.checkCollision = function() {
    if(
      this.y + this.height >= player.y &&
      this.y <= player.y + player.height &&
      this.x + this.width >= player.x &&
      this.x <= player.x + player.width
    ) {
      player.isDead = true
    }
      
  }
}

export { Enemy }