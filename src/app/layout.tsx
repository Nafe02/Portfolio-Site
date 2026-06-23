import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nafiu Gwandu — Product Leader",
    template: "%s | Nafiu Gwandu",
  },
  description:
    "Personal portfolio of Nafiu Gwandu — product leader, builder, and strategist focused on systems, execution, and design clarity.",
  openGraph: {
    title: "Nafiu Gwandu — Product Leader",
    description:
      "Product leader building systems, teams, and products with clarity and intent.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=switzer@400&f[]=khand@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
