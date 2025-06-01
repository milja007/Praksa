import BrojFaktureDobavljaca from "@/components/form/broj/BrojFaktureDobavljaca";
import DatumDospijeca from "@/components/form/broj/DatumDospijeca";
import DatumIzdavanja from "@/components/form/broj/DatumIzdavanja";
import IznosBruto from "@/components/form/broj/IznosBruto";
import IznosNeto from "@/components/form/broj/IznosNeto";
import IznosPoreza from "@/components/form/broj/IznosPoreza";
import Dobavljac from "@/components/form/Dobavljac";
import Opis from "@/components/form/tekst/Opis";

const NewInvoicePage = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Invoices</h1>
      <BrojFaktureDobavljaca />
      <DatumIzdavanja />
      <DatumDospijeca />
      <Dobavljac />
      <IznosNeto />
      <IznosPoreza />
      <IznosBruto />
      <Opis />

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

export default NewInvoicePage;
