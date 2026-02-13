import { useState } from 'react'
import './App.css'

const initialHamsters = [
  { id: 'hugo-0', name: 'Hugo' },
  { id: 'jason-1', name: 'Jason' },
  { id: 'macho-2', name: 'Macho' },
  { id: 'tyler-3', name: 'Tyler' },
]

function App() {
  const [hamsters] = useState(initialHamsters)

  const totalHamsters = hamsters.reduce((total) => total + 1, 0)

  return (
    <main className="app">
      <header className="appHeader">
        <h1>Hamster Manager</h1>
        <p className="summary">Total hamsters: {totalHamsters}</p>
      </header>

      <section className="panel" aria-label="Current hamsters">
        <ul className="hamsterList">
          {hamsters.map((hamster) => (
            <li key={hamster.id} className="hamsterListItem">
              {hamster.name}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App
