class Cell {
  el = document.createElement('div')
  isMine = false
  clicked = false
  neighbours = [{r: 0, c: 0}]
  constructor(r, c) {
    this.el.classList.add('cell')
    this.el.classList.add('hidden')
    this.isMine = Math.random() < 0.1
    // if(this.isMine) {
    //   this.el.style.background = 'red'
    // }
    this.neighbours = [
      { r: r, c: c + 1},
      { r: r, c: c - 1},
      { r: r + 1, c: c},
      { r: r + 1, c: c + 1},
      { r: r + 1, c: c - 1},
      { r: r - 1, c: c},
      { r: r - 1, c: c + 1},
      { r: r - 1, c: c - 1},
    ]
  }
}