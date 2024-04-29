import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDesctiption] = useState("");
  const [select, setSelect] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      description,
      quantity: select,
      packed: false,
      id: Date.now(),
    };
    console.log(newItem);
    onAddItems(newItem);
    setDesctiption("");
    setSelect(1);
  }
  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip?</h3>
        <select
          value={select}
          onChange={(e) => setSelect(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (c, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Items..."
          value={description}
          onChange={(e) => setDesctiption(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
}
