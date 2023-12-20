import '../globals.css'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Repetition world studio",
  description: "Home of composer Tom Wrankmore",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
