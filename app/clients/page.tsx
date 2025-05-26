import clientDataFile from "@/mockData/ClientData.json";
import Link from "next/link";

interface ClientDataItem {
  id: number;
  naziv: string;
  adresa: string;
  email: string;
  kontaktOsoba: string;
}
const clientDatas: ClientDataItem[] =
  clientDataFile.clientData as ClientDataItem[];
const ClientsPage = () => {
  return (
    <div className="flex flex-col items-center">
      {clientDatas.map((client) => (
        <Link
          href={`/clients/client-${client.id}`}
          key={client.id}
          className="text-blue-500 font-bold border border-red-500  "
        >
          naziv:{client.naziv}
          <br /> adresa:{client.adresa} <br /> email:{client.email} <br />
          kontakt osoba:{client.kontaktOsoba}
        </Link>
      ))}
    </div>
  );
};

export default ClientsPage;
