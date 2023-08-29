function Player(x, y, board) {
  var self = this
  this.x = x
  this.y = y
  this.direction = 0
  this.speed = 5
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
    var nextX = self.x + self.speed * self.direction
    if(nextX >= 0 && nextX <= 450) {
      self.x = self.x + self.speed * self.direction
      self.sprite.style.left = self.x + 'px'
    }
    console.log(self.x)
  }
}

export { Player }