import clientDataFile from "@/mockData/ClientData.json";
import Link from "next/link";
import Input from "@/app/components/Input";

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
  const [displayedClients, setDisplayedClients] =
    useState<ClientDataItem[]>(allClientDatas);

  // Function to handle the search logic, will be passed to the Input component
  const handleClientSearch = (searchTerm: string) => {
    const lowercasedSearchTerm = searchTerm.toLowerCase().trim();

    if (!lowercasedSearchTerm) {
      // If the search term is empty, show all clients
      setDisplayedClients(allClientDatas);
      return;
    }

    // Filter the original list of clients
    const filtered = allClientDatas.filter((client) =>
      client.naziv.toLowerCase().includes(lowercasedSearchTerm)
    );
    setDisplayedClients(filtered);
  };
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
      <Input onSearch={handleClientSearch} />
    </div>
  );
};

export default ClientsPage;

// "use client"; // This component now needs to be a client component

// import React, { useState } from "react"; // Import useState
// import clientDataFile from "@/mockData/ClientData.json";
// import Link from "next/link";
// import Input from "@/app/components/Input"; // Ensure this path is correct

// interface ClientDataItem {
//   id: number;
//   naziv: string;
//   adresa: string;
//   email: string;
//   kontaktOsoba: string;
// }

// // Original list of all clients - keep this unchanged
// const allClientDatas: ClientDataItem[] =
//   clientDataFile.clientData as ClientDataItem[];

// const ClientsPage = () => {
//   // State to hold the clients that are currently displayed (filtered list)
//   const [displayedClients, setDisplayedClients] = useState<ClientDataItem[]>(allClientDatas);

//   // Function to handle the search logic, will be passed to the Input component
//   const handleClientSearch = (searchTerm: string) => {
//     const lowercasedSearchTerm = searchTerm.toLowerCase().trim();

//     if (!lowercasedSearchTerm) {
//       // If the search term is empty, show all clients
//       setDisplayedClients(allClientDatas);
//       return;
//     }

//     // Filter the original list of clients
//     const filtered = allClientDatas.filter((client) =>
//       client.naziv.toLowerCase().includes(lowercasedSearchTerm)
//     );
//     setDisplayedClients(filtered);
//   };

//   return (
//     <div className="flex flex-col items-center p-4"> {/* Added some padding */}
//       <h1 className="text-2xl font-bold mb-4">Our Clients</h1> {/* Added a title */}

//       {/* Render the Input component and pass the search handler */}
//       <Input onSearch={handleClientSearch} />

//       {/* Display the list of clients (either all or filtered) */}
//       {displayedClients.length > 0 ? (
//         displayedClients.map((client) => (
//           <Link
//             href={`/clients/client-${client.id}`} // This route should exist if you want to navigate
//             key={client.id}
//             className="text-blue-600 hover:text-blue-800 font-semibold border border-gray-300 p-3 my-2 w-full max-w-md rounded shadow hover:shadow-lg transition-shadow" // Enhanced styling
//           >
//             <strong>Naziv:</strong> {client.naziv}
//             <br /> <strong>Adresa:</strong> {client.adresa}
//             <br /> <strong>Email:</strong> {client.email}
//             <br /> <strong>Kontakt osoba:</strong> {client.kontaktOsoba}
//           </Link>
//         ))
//       ) : (
//         <p className="mt-4 text-gray-600">No clients found matching your search criteria.</p>
//       )}
//     </div>
//   );
// };

// export default ClientsPage;
