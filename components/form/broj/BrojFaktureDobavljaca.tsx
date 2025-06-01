import React from "react";

const BrojFaktureDobavljaca = () => {
  return (
    <div>
      <label
        htmlFor="BrojFaktureDobavljaca"
        className="text-sm font-medium text-gray-700"
      >
        Broj Fakture Dobavljaca:
      </label>
      <input
        id="BrojFaktureDobavljaca"
        type="text"
        placeholder="broj fakture dobavljaca"
        className="flex-grow appearance-none border border-gray-300 rounded-md px-3 py-1.5
          text-sm text-gray-700 placeholder-gray-400
          focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500
          transition duration-150"
      />
    </div>
  );
};

export default BrojFaktureDobavljaca;
