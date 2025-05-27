//SERVER SIDE

import React from "react";
import clientDataFile from "@/mockData/ClientData.json";

interface ClientDataItem {
  id: number;
  naziv: string;
  adresa: string;
  email: string;
  kontaktOsoba: string;
}

const clientDatas: ClientDataItem[] =
  clientDataFile.clientData as ClientDataItem[];
//params promise type
interface ClientProps {
  params: Promise<{ clientId: string }>;
}

const Clinent = async ({ params }: ClientProps) => {
  const { clientId } = await params;

  const numericId = parseInt(clientId.replace("client-", ""), 10);

  const client = clientDatas.find((c) => c.id === numericId);

  if (!client) {
    return (
      <div>
        <h1>Client Not Found</h1>
        <p>No client data available for identifier: {clientId}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Client Details</h1>
      <p>ID: {client.id}</p>
      <p>Naziv: {client.naziv}</p>
      <p>Adresa: {client.adresa}</p>
      <p>Email: {client.email}</p>
      <p>Kontakt Osoba: {client.kontaktOsoba}</p>
    </div>
  );
};

export default Clinent;

//PRIMJER ZA KLIENT SA React.use()
// 'use client';

// import React from "react"; // React.use() is part of React
// import clientDataFile from "@/mockData/ClientData.json";

// interface ClientDataItem {
//   id: number;
//   naziv: string;
//   adresa: string;
//   email: string;
//   kontaktOsoba: string;
// }

// const clientDatas: ClientDataItem[] =
//   clientDataFile.clientData as ClientDataItem[];

// interface ClientComponentPageProps {
//   params: Promise<{ clientId: string; }>;
// }

// const ClinentClientExample = ({ params }: ClientComponentPageProps) => {

//   const actualParamsObject = React.use(params);
//   const { clientId } = actualParamsObject;

//   const numericId = parseInt(clientId.replace("client-", ""), 10);
//   const client = clientDatas.find((c) => c.id === numericId);

//   if (!client) {
//     return (
//       <div>
//         <h1>Client Not Found (Client Component)</h1>
//         <p>No client data available for identifier: {clientId} (from unwrapped params)</p>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h1>Client Details (Client Component)</h1>
//       <p>ID: {client.id}</p>
//       <p>Naziv: {client.naziv}</p>
//       <p>Adresa: {client.adresa}</p>
//       <p>Email: {client.email}</p>
//       <p>Kontakt Osoba: {client.kontaktOsoba}</p>
//     </div>
//   );
// };

// export default ClinentClientExample;
