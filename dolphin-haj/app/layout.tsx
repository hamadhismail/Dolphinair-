import type { Metadata } from "next";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { AuthProvider } from "@/context/AuthContext";
import { BookingProvider } from "@/context/BookingContext";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Dolphin Haj | Umrah Booking Engine",
  description: "Automated Umrah Booking Engine. Trusted by 10,000+ pilgrims. Govt approved, Saudi certified.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <BookingProvider>
            <LenisProvider>
              <div className="min-h-screen bg-black text-zinc-100 flex flex-col">
                <Navbar />
                <main className="flex-1">
                  {children}
                </main>
                <Footer />
              </div>
            </LenisProvider>
          </BookingProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
