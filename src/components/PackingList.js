import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItems,
  onToggleItems,
  onClearList,
}) {
  const [sortedBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortedBy === "input") sortedItems = items;
  if (sortedBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortedBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((curItem) => (
            <Item
              item={curItem}
              onDeleteItems={onDeleteItems}
              onToggleItems={onToggleItems}
            />
          ))}
        </ul>
        <div className="actions">
          <select value={sortedBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">sorted by input</option>
            <option value="description">sorted by description</option>
            <option value="packed">sorted by packed</option>
          </select>
          <button onClick={onClearList}>Clear list</button>
        </div>
      </div>
    </>
  );
}
