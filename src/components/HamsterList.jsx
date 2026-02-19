import HamsterItem from './HamsterItem.jsx'

function HamsterList({ hamsters, onDelete, onUpdate }) {
  if (hamsters.length === 0) {
    return <p className="emptyState">No hamsters yet. Add one above.</p>
  }

  return (
    <ul className="hamsterList">
      {hamsters.map((hamster) => (
        <HamsterItem
          key={hamster.id}
          hamster={hamster}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  )
}

export default HamsterList
