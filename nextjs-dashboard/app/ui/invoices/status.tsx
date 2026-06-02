import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

const INVOICE_STATUS = {
  PENDING: "pending",
  PAID: "paid",
} as const;

type InvoiceStatusType = (typeof INVOICE_STATUS)[keyof typeof INVOICE_STATUS];

export default function InvoiceStatus({
  invoiceStatus,
}: {
  invoiceStatus: InvoiceStatusType;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2 py-1 text-xs",
        {
          "bg-gray-100 text-gray-500": invoiceStatus === INVOICE_STATUS.PENDING,
          "bg-green-50 text-green-700": invoiceStatus === INVOICE_STATUS.PAID,
        },
      )}
    >
      {invoiceStatus === INVOICE_STATUS.PENDING ? (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {invoiceStatus === INVOICE_STATUS.PAID ? (
        <>
          Paid
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
