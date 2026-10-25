
function SearchBar({ search, setSearch }) {
  return (
    <input
      type="search"
      placeholder="Search blogs by title..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;
