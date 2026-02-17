import { useState } from 'react'
import './App.css'

const initialHamsters = [
  {
    id: 'hugo-0',
    name: 'Hugo',
    photo: '/hamsters/hugo.jpg',
    photoAlt: 'Hugo the hamster',
  },
  {
    id: 'jason-1',
    name: 'Jason',
    photo: '/hamsters/jason.jpg',
    photoAlt: 'Jason the hamster',
  },
  {
    id: 'macho-2',
    name: 'Macho',
    photo: '/hamsters/macho.jpg',
    photoAlt: 'Macho the hamster',
  },
  {
    id: 'tyler-3',
    name: 'Tyler',
    photo: '/hamsters/tyler.jpg',
    photoAlt: 'Tyler the hamster',
  },
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
              <img
                className="hamsterAvatar"
                src={hamster.photo}
                alt={hamster.photoAlt}
                width={44}
                height={44}
                loading="lazy"
              />
              <span className="hamsterName">{hamster.name}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App
