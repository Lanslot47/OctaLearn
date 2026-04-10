"use client";

// import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "./component/Sidebar";
import Navbar from "./component/Navbar";
import ProtectedRoute from "./component/protected";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">
        <ProtectedRoute>
          <div className="flex flex-col md:flex-row overflow-x-hidden">
            <Sidebar />
            <div className="flex-1 md:ml-64">
              <Navbar />
              <main className="p-4 md:p-6">{children}</main>
            </div>
          </div>
        </ProtectedRoute>
      </body>
    </html>
  );
}