"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn === false) {
      router.replace("/auth/Login");
    }
  }, [isLoggedIn, router]);

  if (isLoggedIn === null) {
    return <div>Loading...</div>;
  }

  if (isLoggedIn === false) {
    return null;
  }

  return <>{children}</>;
}