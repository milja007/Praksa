const InvoicesPage = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Invoices</h1>

      <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow">
        <label
          htmlFor="naslovInput"
          className="text-sm font-medium text-gray-700"
        >
          Naslov:
        </label>
        <input
          id="naslovInput"
          type="text"
          placeholder="Unesite naslov..."
          className="flex-grow appearance-none border border-gray-300 rounded-md px-3 py-1.5 
             text-sm text-gray-700 placeholder-gray-400
             focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500
             transition duration-150"
        />
      </div>
      <div className="mt-3 flex items-center gap-3 bg-white p-3 rounded-lg shadow">
        <label
          htmlFor="brojInput"
          className="text-sm font-medium text-gray-700"
        >
          Broj:
        </label>
        <input
          id="brojInput"
          type="text"
          placeholder="Unesite broj..."
          className="flex-grow appearance-none border border-gray-300 rounded-md px-3 py-1.5
             text-sm text-gray-700 placeholder-gray-400
             focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500
             transition duration-150"
        />
      </div>
    </div>
  );
};

export default InvoicesPage;
