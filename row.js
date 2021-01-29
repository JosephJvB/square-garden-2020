class Row {
  el = document.createElement('div')
  cells = []
  constructor(rowIdx) {
    this.el.className = 'row'
    for(let i = 0; i < rowNum; i++) {
      const c = new Cell(rowIdx, i)
      this.cells.push(c)
      this.el.appendChild(c.el)
    }
  }
}