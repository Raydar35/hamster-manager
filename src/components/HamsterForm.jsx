import { useId, useState } from 'react'

function HamsterForm({ onAdd, photos }) {
  const nameInputId = useId()
  const photoGroupId = useId()

  const [name, setName] = useState('')
  const [photo, setPhoto] = useState('')
  const [touched, setTouched] = useState(false)

  const trimmedName = name.trim()
  const hasNameError = touched && trimmedName.length === 0
  const hasPhotoError = touched && !photo

  function handleSubmit(event) {
    event.preventDefault()
    setTouched(true)

    if (trimmedName.length === 0) return
    if (!photo) return

    onAdd({ name: trimmedName, photo })
    setName('')
    setPhoto('')
    setTouched(false)
  }

  return (
    <form className="hamsterForm" onSubmit={handleSubmit} aria-label="Add hamster">
      <div className="hamsterFormRow">
        <label className="fieldLabel" htmlFor={nameInputId}>
          Hamster name
        </label>
        <input
          id={nameInputId}
          className="textInput"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setTouched(true)}
          placeholder="e.g., Peanut"
          autoComplete="off"
        />
      </div>

      <div className="hamsterFormRow">
        <fieldset className="photoFieldset">
          <legend className="fieldLabel">Picture</legend>

          {Array.isArray(photos) && photos.length > 0 ? (
            <div
              className="photoGrid"
              role="radiogroup"
              aria-label="Choose hamster picture"
            >
              {photos.map((src, index) => {
                const inputId = `${photoGroupId}-${index}`
                const isSelected = photo === src

                return (
                  <label
                    key={src}
                    className={`photoChoice${isSelected ? ' photoChoiceSelected' : ''}`}
                    htmlFor={inputId}
                  >
                    <input
                      id={inputId}
                      className="srOnly"
                      type="radio"
                      name={photoGroupId}
                      value={src}
                      checked={isSelected}
                      onChange={(e) => {
                        setPhoto(e.target.value)
                        setTouched(true)
                      }}
                    />
                    <img
                      className="photoChoiceImg"
                      src={src}
                      alt=""
                      width={64}
                      height={64}
                      loading="lazy"
                    />
                  </label>
                )
              })}
            </div>
          ) : (
            <p className="emptyState">No pictures available.</p>
          )}
        </fieldset>
      </div>

      {hasNameError ? <p className="fieldError">Please enter a name.</p> : null}
      {hasPhotoError ? <p className="fieldError">Please choose a picture.</p> : null}

      <div className="actions">
        <button type="submit">Add</button>
      </div>
    </form>
  )
}

export default HamsterForm
