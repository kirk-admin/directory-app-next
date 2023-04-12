"use client";
import { useState } from "react";

const CourseSearch = ({ getSearchResults }) => {
  const [query, setQuery] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/courses/search?query=${query}`);
    const courses = await res.json();
    getSearchResults(courses);
  };
  return (
    <form onSubmit={handleSubmit} className="w-full mt-5 flex gap-2">
      <input
        type="search"
        placeholder="search courses"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 border border-gray-500"
      />
      <button type="submit" className="bg-blue-500 text-blue-300 px-4 py-2">
        Search
      </button>
    </form>
  );
};

export default CourseSearch;
