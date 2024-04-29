export default function Stats({ items }) {
  if (!items.length) return <p className="stats">lets start packing</p>;
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);
  return (
    <>
      {percentage === 100 ? (
        <footer className="stats">
          <em>you already packed everything</em>
        </footer>
      ) : (
        <footer className="stats">
          <em>
            💼 You have {numItems} items on your list, And you already packed
            {packedItems} ({percentage}%)
          </em>
        </footer>
      )}
    </>
  );
}
