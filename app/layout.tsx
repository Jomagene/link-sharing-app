import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "../styles/globals.css";

const instrumentSans = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Share links app",
  description: "This app allows to share links to others",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.className} bg-[#FAFAFA]`}>
        {children}
      </body>
    </html>
  );
}
