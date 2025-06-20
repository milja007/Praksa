import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Link href={"/clients"}>Client Page</Link>
      <Link href={"/invoices/incoming/new"}>New invoice</Link>
    </div>
  );
}
