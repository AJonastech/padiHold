import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { RadixThemeProvider } from "./providers";
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PadiHold",
  description:
    "PadiHold is a secure escrow platform designed to solve payment-on-delivery issues for businesses in Nigeria, ensuring trust and transparency between buyers and sellers.",
  authors: [
    {
      name: "Agu Jonas",
    },
    {
      name: "Adekunle Emmanuel",
    },
    {
      name: "Entekume Jeffrey",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="font-plus-jakarta-sans antialiased">
        <RadixThemeProvider>{children}</RadixThemeProvider>
      </body>
    </html>
  );
}
