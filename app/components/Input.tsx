"use client";

import React, { useRef } from "react";
interface InputProps {
  onSearch: (searchTerm: string) => void;
}
const Input = ({ onSearch }: InputProps) => {
  const myRef = useRef<HTMLInputElement>(null);

  function handleSearch(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (myRef.current) {
      const inputValue = myRef.current.value;
      onSearch(inputValue);
    }
  }
  return (
    <div className="my-4">
      {" "}
      {/* Added some margin for spacing */}
      <input
        type="text"
        name="search"
        placeholder="Find your client by name (naziv)"
        ref={myRef}
        className="border p-2 rounded-l" // Added some basic styling
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r" // Changed styling
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default Input;
