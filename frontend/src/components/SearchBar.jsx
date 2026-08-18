import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({
  initialValue = "",
  onSearch,
  autoFocus = false
}) {
  const [value, setValue] = useState(initialValue);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const query = value.trim();

    if (!query) return;

    if (onSearch) {
      onSearch(query);
    } else {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  }

  return (
    <form
      className="search-bar"
      onSubmit={handleSubmit}
      role="search"
    >
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Cari artikel, topik, teknologi..."
        aria-label="Cari artikel"
        autoFocus={autoFocus}
        className="search-input"
      />

      <button
        type="submit"
        className="btn btn-primary search-submit"
      >
        Cari
      </button>
    </form>
  );
}