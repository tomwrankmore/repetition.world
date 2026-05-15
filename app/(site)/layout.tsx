
import type { Metadata } from "next";
import { Jost, Noto_Sans_Mono } from "next/font/google";
import "../globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const jost = Jost({ subsets: ["latin"] });
const noto_sans_mono = Noto_Sans_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Repetition world",
  description: "Home of composer Tom Wrankmore",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${noto_sans_mono.className} p-4 sm:p-10 flex flex-col min-h-screen bg-[#101010] text-white`}>
        <Header />
        <main className="py-8 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
