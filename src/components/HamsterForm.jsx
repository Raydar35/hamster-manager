import { useId, useState } from 'react'

function HamsterForm({ onAdd }) {
  const inputId = useId()
  const [name, setName] = useState('')
  const [touched, setTouched] = useState(false)

  const trimmedName = name.trim()
  const hasError = touched && trimmedName.length === 0

  function handleSubmit(event) {
    event.preventDefault()
    setTouched(true)

    if (trimmedName.length === 0) return

    onAdd(trimmedName)
    setName('')
    setTouched(false)
  }

  return (
    <form className="hamsterForm" onSubmit={handleSubmit} aria-label="Add hamster">
      <div className="hamsterFormRow">
        <label className="fieldLabel" htmlFor={inputId}>
          Hamster name
        </label>
        <input
          id={inputId}
          className="textInput"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setTouched(true)}
          placeholder="e.g., Peanut"
          autoComplete="off"
        />
      </div>

      {hasError ? <p className="fieldError">Please enter a name.</p> : null}

      <div className="actions">
        <button type="submit">Add</button>
      </div>
    </form>
  )
}

export default HamsterForm
