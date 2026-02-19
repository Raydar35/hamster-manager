import { useState } from 'react'
import './App.css'
import HamsterForm from './components/HamsterForm.jsx'
import HamsterList from './components/HamsterList.jsx'

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
  const [hamsters, setHamsters] = useState(initialHamsters)

  function createHamsterId(name) {
    if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID()
    return `${name.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`
  }

  function addHamster(name) {
    const newHamster = {
      id: createHamsterId(name),
      name,
      photo: '',
      photoAlt: '',
    }

    setHamsters((current) => [newHamster, ...current])
  }

  function deleteHamster(id) {
    setHamsters((current) => current.filter((hamster) => hamster.id !== id))
  }

  function updateHamster(id, updates) {
    setHamsters((current) =>
      current.map((hamster) =>
        hamster.id === id ? { ...hamster, ...updates } : hamster,
      ),
    )
  }

  const totalHamsters = hamsters.length

  return (
    <main className="app">
      <header className="appHeader">
        <h1>Hamster Manager</h1>
        <p className="summary">Total hamsters: {totalHamsters}</p>
      </header>

      <section className="panel" aria-label="Add a hamster">
        <HamsterForm onAdd={addHamster} />
      </section>

      <section className="panel" aria-label="Current hamsters">
        <HamsterList
          hamsters={hamsters}
          onDelete={deleteHamster}
          onUpdate={updateHamster}
        />
      </section>
    </main>
  )
}

export default App
