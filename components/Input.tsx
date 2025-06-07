/**
 * @file Input.tsx
 * @description Generička input komponenta s pretraživanjem. Koristi se za pretraživanje klijenata po nazivu.
 *
 * @component
 * @example
 * ```tsx
 * <Input onSearch={(term) => console.log(term)} />
 * ```
 */

"use client";

import React, { useRef } from "react";

/**
 * Props za Input komponentu
 * @interface InputProps
 * @property {function} onSearch - Callback funkcija koja se poziva kada korisnik pretražuje
 */
interface InputProps {
  onSearch: (searchTerm: string) => void;
}

/**
 * Input komponenta za pretraživanje
 *
 * @param {InputProps} props - Props za komponentu
 * @returns {JSX.Element} Input komponenta s gumbom za pretraživanje
 *
 * @features
 * - Pretraživanje u realnom vremenu
 * - Responzivni dizajn
 * - Tailwind CSS stiliziranje
 * - Pristupačnost
 */
const Input = ({ onSearch }: InputProps) => {
  const myRef = useRef<HTMLInputElement>(null);

  /**
   * Handler za pretraživanje
   * @param {React.MouseEvent<HTMLButtonElement>} e - Event objekat
   */
  function handleSearch(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (myRef.current) {
      const inputValue = myRef.current.value;
      onSearch(inputValue);
    }
  }
  return (
    <div className="my-4">
      <input
        type="text"
        name="search"
        placeholder="Find your client by name (naziv)"
        ref={myRef}
        className="border p-2 rounded-l"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default Input;
