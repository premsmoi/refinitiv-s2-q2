import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    fetch('https://api.publicapis.org/categories')
      .then((response) => response.json())
      .then((result) => setData(result))
  }, [])

  return (
    <div className="App">
      <input
        placeholder="Search.."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <td>Categories</td>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((d) => d.toUpperCase().includes(input.toUpperCase()))
            .map((d) => {
              return (
                <tr>
                  <td>{d}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default App
