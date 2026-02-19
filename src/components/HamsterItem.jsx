import { useId, useState } from 'react'

function HamsterItem({ hamster, onDelete, onUpdate }) {
  const editInputId = useId()
  const [isEditing, setIsEditing] = useState(false)
  const [draftName, setDraftName] = useState(hamster.name)
  const [touched, setTouched] = useState(false)

  const trimmedDraft = draftName.trim()
  const hasError = touched && trimmedDraft.length === 0

  function startEdit() {
    setDraftName(hamster.name)
    setTouched(false)
    setIsEditing(true)
  }

  function cancelEdit() {
    setDraftName(hamster.name)
    setTouched(false)
    setIsEditing(false)
  }

  function saveEdit() {
    setTouched(true)
    if (trimmedDraft.length === 0) return

    if (trimmedDraft !== hamster.name) {
      onUpdate(hamster.id, { name: trimmedDraft })
    }

    setIsEditing(false)
  }

  function handleEditSubmit(event) {
    event.preventDefault()
    saveEdit()
  }

  return (
    <li className="hamsterListItem">
      {hamster.photo ? (
        <img
          className="hamsterAvatar"
          src={hamster.photo}
          alt={hamster.photoAlt || `${hamster.name} the hamster`}
          width={44}
          height={44}
          loading="lazy"
        />
      ) : (
        <div className="hamsterAvatarPlaceholder" aria-hidden="true" />
      )}

      <div className="hamsterItemBody">
        {isEditing ? (
          <form className="hamsterEditForm" onSubmit={handleEditSubmit}>
            <label className="srOnly" htmlFor={editInputId}>
              Edit hamster name
            </label>
            <input
              id={editInputId}
              className="textInput textInputInline"
              value={draftName}
              onChange={(e) => setDraftName(e.target.value)}
              onBlur={() => setTouched(true)}
              autoComplete="off"
            />

            <div className="itemActions">
              <button type="submit" disabled={trimmedDraft.length === 0}>
                Save
              </button>
              <button type="button" className="secondary" onClick={cancelEdit}>
                Cancel
              </button>
            </div>

            {hasError ? <p className="fieldError">Name can’t be empty.</p> : null}
          </form>
        ) : (
          <>
            <span className="hamsterName">{hamster.name}</span>
            <div className="itemActions">
              <button type="button" onClick={startEdit}>
                Edit
              </button>
              <button
                type="button"
                className="danger"
                onClick={() => onDelete(hamster.id)}
              >
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </li>
  )
}

export default HamsterItem
