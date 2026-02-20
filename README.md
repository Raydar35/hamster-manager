# Hamster Manager

**Name: Darius Beckford**

A simple React app that lets you manage a list of hamsters. Users can:
- **Add** a hamster by entering a name and selecting a picture from a grid
- **View** the current hamsters in a list
- **Edit** a hamster’s **name only**
- **Delete** a hamster from the list

## How to run
1. Install dependencies:
   ``bash
   npm install
   ``
2. Start the dev server:
   ``bash
   npm run dev
   ``
3. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Feature/rubric checklist

### 1) Component-based implementation
The UI is split into reusable components:
- `components/HamsterForm.jsx`: form for adding a hamster (name + picture picker grid)
- `components/HamsterList.jsx`: renders the list container (`ul`)
- `components/HamsterItem.jsx`: renders a single hamster row (`li`) with edit/delete controls

---

### 2) Application of `map` and `filter`
This project uses React-friendly array methods to update immutable state:

- **`map`**: used to update an existing hamster without mutating the array  
  (in `App.jsx`, `updateHamster` maps over the list and updates the matching item by `id`).

- **`filter`**: used to delete an existing hamster  
  (in `App.jsx`, `deleteHamster` filters out the hamster with the matching `id`).

---

### 3) Add/Insert New Item
Adding is handled by the form:
- The user enters a name and selects a picture from the image grid.
- On submit, `HamsterForm` calls `onAdd({ name, photo })`.
- In `App.jsx`, `addHamster` creates a new hamster object with an `id` and inserts it into state.

---

### 4) Delete/Remove Existing Item
Each hamster row includes a **Delete** button.
- Clicking it triggers `onDelete(id)` from `HamsterItem`.
- In `App.jsx`, `deleteHamster` removes it using `filter`.

---

### 5) Update Existing Item
Each hamster row includes an **Edit** flow for the hamster’s **name**.
- `HamsterItem` toggles into an editing mode for the name.
- Saving triggers `onUpdate(id, { name })`.
- In `App.jsx`, `updateHamster` applies the name change using `map`.

---

### 6) Display the current list of items
The hamster list is displayed as a semantic HTML list:
- `HamsterList` renders a `<ul>`
- Each hamster is rendered as an `<li>` via `HamsterItem`
- The hamster name and selected picture are shown for each item
