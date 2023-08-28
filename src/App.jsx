import { useEffect, useState } from 'react'
import './style/style.scss'
import Cell from './Cell'

function App() {
  const [playerSymbol, setPlayerSymbol] = useState("")
  const [table, setTable] = useState([
    ['', '', ''],
    ['', 'X', ''],
    ['', '', '']
  ])
  const computerSymbol = playerSymbol === "X" ? "O" : "X"
  // console.log(table)
  const drawtable = () => {
    const updatedTable = table.map((row, i) => {

      const tableRow = row.map((cell, i) => {
        const [cellValue, setCellValue] = useState(cell)
        return <Cell value={cellValue} player={playerSymbol} changeValue={setCellValue} key={i} />
      })

      return (
        <div key={i} className='myRow'>
          {tableRow}
        </div>
      )
    })
    return updatedTable
  }


  // useEffect(() => {
  //   const f = () => {
  //     for (let i = 0; i <= table.length; i++) {
  //       if (table[i][0] == table[i][1] == table[i][2])
  //     }
  //   }

  // }, [table])

  return (
    <div>
      <div className='choose'>
        {!playerSymbol ?
          (<>
            <h3>Choose your Figure</h3>
            <div className='options'>
              <button onClick={() => setPlayerSymbol("X")}>X</button>
              <button onClick={() => setPlayerSymbol("O")}>O</button>

            </div>
          </>
          )
          : <h3>You are playing with <span>{playerSymbol}</span></h3>
        }
      </div>
      <div className='table'>
        {drawtable()}
      </div>
    </div>
  )
}

export default App
