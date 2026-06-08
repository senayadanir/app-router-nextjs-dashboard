import Link from "next/link";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function AuthErrorPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-50">
      <div className="rounded-lg bg-white p-8 shadow-md text-center max-w-md">
        <ExclamationTriangleIcon className="h-12 w-12 text-red-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Authentication Error
        </h1>
        <p className="text-gray-600 mb-6">
          Something went wrong during the sign-in process. Your credentials
          might be invalid or a temporary server error occurred.
        </p>
        <Link
          href="/login"
          className="flex h-10 items-center justify-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-600"
        >
          Try Again
        </Link>
      </div>
    </div>
  );
}
