
function CategoryFilter({ categories, category, setCategory }) {
  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      {categories.map((item) => (
        <option key={item} value={item}>
          {item === "All" ? "All Categories" : item}
        </option>
      ))}
    </select>
  );
}

export default CategoryFilter;
