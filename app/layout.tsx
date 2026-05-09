import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Roboto } from "next/font/google";
import BackToTop from "@/components/common/back-to-top";
import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "DM Construction",
    template: "%s | DM Construction",
  },
  description:
    "dmconstruction provides modern construction, architecture, and interior design services for residential and commercial projects.",
  icons: {
    icon: [
      { url: "/fav/favicon.ico" },
      { url: "/fav/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/fav/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/fav/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/fav/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${roboto.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/fav/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/fav/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/fav/apple-touch-icon.png" />
        <link rel="manifest" href="/fav/site.webmanifest" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${roboto.className} min-h-full flex flex-col overflow-x-hidden`}>
        <SiteHeader />
        {children}
        <SiteFooter />
        <BackToTop />
      </body>
    </html>
  );
}
