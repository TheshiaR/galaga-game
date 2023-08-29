function Enemy (x, y, board) {
  this.x = x
  this.y = y
  this.sprite

  this.insertEnemy = function() {
    var newEnemy = document.createElement('div')
    newEnemy.classList.add('enemy')
    newEnemy.style.left = this.x + 'px'
    newEnemy.style.top = this.y + 'px'
    this.sprite = newEnemy
    board.appendChild(this.sprite)
  }

}

export { Enemy }