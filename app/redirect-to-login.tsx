"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";

export default function RedirectToLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/login");
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen text-[#633CFF]">
      {loading ? (
        <LoaderCircle className="animate-spin w-10 h-10 text-[#633CFF]" />
      ) : (
        "Redirecting..."
      )}
    </div>
  );
}
