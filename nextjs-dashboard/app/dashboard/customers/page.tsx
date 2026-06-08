import { Metadata } from "next";
import { fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";
import { lusitana } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Customers",
  description: "View and manage your Acme customers.",
};

export default async function Page() {
  const customers = await fetchFilteredCustomers("");

  return (
    <main className="w-full">
      <CustomersTable customers={customers} />
    </main>
  );
}
