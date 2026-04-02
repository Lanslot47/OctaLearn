"use client";

// import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "./component/Sidebar";
import Navbar from "./component/Navbar";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";


// const geistSans = Geist({
//     variable: "--font-geist-sans",
//     subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//     variable: "--font-geist-mono",
//     subsets: ["latin"],
// });


export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn === false) {
      router.replace("../auth/Login");
    }
  }, [isLoggedIn, router]);

  if (isLoggedIn === null) {
    return <div>Loading...</div>;
  }

  if (isLoggedIn === false) {
    return null;
  }

  return (
    <html lang="en">
      <body
        className={`antialiased bg-gray-50`}
      >
        <div className="flex flex-col md:flex-row overflow-x-hidden">
          <Sidebar />
          <div className="flex-1 md:ml-64">
            <Navbar />
            <main className="p-4 md:p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
