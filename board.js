class Board {
  el = document.querySelector('main')
  rows = []
  safeCells = 0
  constructor() {
    for(let i = 0; i < rowNum; i++) {
      const r = new Row(i)
      for(const c of r.cells) {
        c.el.addEventListener('click', () => this.onCellClick(c))
        if(!c.isMine) this.safeCells++
      }
      this.rows.push(r)
    }
    for(const r of this.rows) this.el.appendChild(r.el)
  }
  checkWin() {
    let found = 0
    for(const r of this.rows)
    for(const c of r.cells) {
      if(!c.isMine && c.clicked) found++
    }
    if(found == this.safeCells) {
      this.el.style.pointerEvents = 'none'
      alert('win!')
    }
  }
  lose() {
    this.el.style.pointerEvents = 'none'
    for(const r of this.rows)
    for(const c of r.cells) {
      if(c.isMine) c.el.style.background = 'red'
    }
    alert('you lose!')
  }
  onCellClick(cell) {
    this.revealCell(cell)
    this.checkWin()
  }
  revealCell(cell) {
    if(cell.isMine) {
      return this.lose()
    }
    if(cell.clicked) return
    cell.clicked = true
    cell.el.classList.remove('hidden')
    const mines = this.getNeighbourMines(cell)
    if(mines > 0) {
      const p = document.createElement('p')
      p.innerText = mines
      cell.el.appendChild(p)
    } else {
      this.clickNeighbours(cell)
    }
  }
  clickNeighbours(cell) {
    for(const n of cell.neighbours) {
      const nc = this.rows[n.r] && this.rows[n.r].cells[n.c]
      if(!nc || nc.isMine) continue
      const mines = this.getNeighbourMines(nc)
      if(mines == 0) {
        this.revealCell(nc)
      }
    }
  }
  getNeighbourMines(cell) {
    let mines = 0
    for(const n of cell.neighbours) {
      const nc = this.rows[n.r] && this.rows[n.r].cells[n.c]
      if(nc && nc.isMine) mines++
    }
    return mines
  }
}