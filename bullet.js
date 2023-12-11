function Bullet(x, y, board, enemies) {
  var self = this
  this.x = x
  this.y = y
  this.height = 10
  this.width = 10
  this.speed = 10
  this.sprite

  this.insertBullet = function() {
    var newBullet = document.createElement('div')
    newBullet.classList.add('bullet')
    newBullet.style.left = this.x + 'px'
    newBullet.style.top = this.y + 'px'
    this.sprite = newBullet
    board.appendChild(this.sprite)
  }

  this.move = function() {
    self.checkCollision()
    self.y = self.y - self.speed
    self.sprite.style.top = self.y + 'px'
    if(self.y <= 0) {
      self.removeBullet()
    }
  }

  this.timerId = setInterval(this.move, 100)

  this.removeBullet = function() {
    board.removeChild(this.sprite)
    clearInterval(this.timerId)
  }

  this.checkCollision = function() {
    enemies.forEach(function(enemy, i) {
      if(
        self.y + self.height >= enemy.y &&
        self.y <= enemy.y + enemy.height &&
        self.x + self.width >= enemy.x &&
        self.x <= enemy.x + enemy.width
      ) {
        self.removeBullet()
        board.removeChild(enemy.sprite)
        enemies.splice(i, 1)
        
      }
    }) 
  }

}

export { Bullet }