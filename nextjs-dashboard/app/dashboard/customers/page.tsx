export const dynamic = "force-dynamic";
export const revalidate = 0;

import { Metadata } from "next";
import { fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";
import { lusitana } from "@/app/ui/fonts";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Customers",
  description: "View and manage your Acme customers.",
};

export default async function Page() {
  const customers = await fetchFilteredCustomers("");

  return (
    <main className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Customers
      </h1>
      <Suspense fallback={<p>Loading customers...</p>}>
        <CustomersTable customers={customers} />
      </Suspense>
    </main>
  );
}
