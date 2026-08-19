import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://nafiu.vercel.app"),

  title: {
    default: "Nafiu Gwandu — Product Leader",
    template: "%s | Nafiu Gwandu",
  },

  description:
    "Nafiu Gwandu is a Product Leader building products, teams, and systems with clarity, strategy, and intent.",

  keywords: [
    "Nafiu Gwandu",
    "Product Manager",
    "Product Leader",
    "Project Manager",
    "Product Management",
    "Product Strategy",
    "Product Development",
    "Nigeria Product Manager",
  ],

  authors: [
    {
      name: "Nafiu Gwandu",
    },
  ],

  creator: "Nafiu Gwandu",

  openGraph: {
  title: "Nafiu Gwandu — Product Leader",
  description:
    "Product Leader building products, teams, and systems with clarity, strategy, and intent.",
  type: "website",
  siteName: "Nafiu Gwandu",
  images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Nafiu Gwandu — Product Leader",
    },
  ],
},

  twitter: {
  card: "summary_large_image",
  title: "Nafiu Gwandu — Product Leader",
  description:
    "Product Leader building products, teams, and systems with clarity, strategy, and intent.",
  images: ["/og-image.png"],
},

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=switzer@400&f[]=khand@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Person",
            name: "Nafiu Gwandu",
            url: "https://nafiu.vercel.app",
            jobTitle: "Product Leader",
            description:
              "Product Leader building products, teams, and systems with clarity, strategy, and intent.",
          },
          {
            "@type": "WebSite",
            name: "Nafiu Gwandu",
            url: "https://nafiu.vercel.app",
            description:
              "Portfolio of Nafiu Gwandu, a Product Leader focused on products, systems, execution, and team leadership.",
          },
        ],
      }),
    }}
  />
  <ThemeProvider>
    <Navigation />
    <main className="flex-1">{children}</main>
    <Footer />
  </ThemeProvider>
</body>
    </html>
  );
}
