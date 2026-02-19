import { useState } from 'react'
import './App.css'
import HamsterForm from './components/HamsterForm.jsx'
import HamsterList from './components/HamsterList.jsx'

const initialHamsters = []

const hamsterPhotos = [
  '/hamsters/hugo.jpg',
  '/hamsters/jason.jpg',
  '/hamsters/macho.jpg',
  '/hamsters/tyler.jpg',
]

function App() {
  const [hamsters, setHamsters] = useState(initialHamsters)

  function createHamsterId(name) {
    if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID()
    return `${name.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`
  }

  function addHamster({ name, photo }) {
    const trimmedName = String(name ?? '').trim()
    if (!trimmedName) return
    if (!photo) return

    const newHamster = {
      id: createHamsterId(trimmedName),
      name: trimmedName,
      photo,
      photoAlt: `${trimmedName} the hamster`,
    }

    setHamsters((current) => [newHamster, ...current])
  }

  function deleteHamster(id) {
    setHamsters((current) => current.filter((hamster) => hamster.id !== id))
  }

  function updateHamster(id, updates) {
    setHamsters((current) =>
      current.map((hamster) => {
        if (hamster.id !== id) return hamster

        const next = { ...hamster, ...updates }

        if (Object.prototype.hasOwnProperty.call(updates, 'name')) {
          const trimmedName = String(next.name ?? '').trim()
          next.name = trimmedName
          next.photoAlt = next.photo ? `${trimmedName} the hamster` : ''
        }

        return next
      }),
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
        <HamsterForm onAdd={addHamster} photos={hamsterPhotos} />
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
