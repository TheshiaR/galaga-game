function Bullet(x, y, board) {
  var self = this
  this.x = x
  this.y = y
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
    //self.checkCollision()
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

}

export { Bullet }