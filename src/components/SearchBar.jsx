import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-gray-100 outline-none p-3 rounded-4xl w-full"
      />
      <button type="submit" className="bg-[#007bff] outk-500 text-white outline-none cursor-pointer px-2 rounded-2xl">
        Search
      </button>
    </form>
  );
}
