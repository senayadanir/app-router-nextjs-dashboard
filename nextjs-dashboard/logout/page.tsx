"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // 3 saniye sonra kullanıcıyı ana sayfaya gönderir
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-50">
      <div className="rounded-lg bg-white p-8 shadow-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Logged Out</h1>
        <p className="text-gray-600">You have successfully signed out.</p>
        <p className="text-sm text-blue-500 mt-4 animate-pulse">
          Redirecting to homepage...
        </p>
      </div>
    </div>
  );
}
