function Enemy (x, y, board) {
  var self = this
  this.x = x
  this.y = y
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
    self.y = self.y + self.speed
    self.sprite.style.top = self.y + 'px'
  }

  this.timerId = setInterval(this.move, 100)
}

export { Enemy }