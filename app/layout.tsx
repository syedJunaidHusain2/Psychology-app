import type { Metadata } from "next";
import { Inter ,Allison, Poppins } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });



const allison_init = Allison({
  subsets:['latin'],
  weight:['400'],
  variable:'--font-allison'
});

const poppins_init = Poppins({
  subsets:['latin'],
  weight:['400'],
  variable:'--font-poppins'
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${allison_init.variable} ${poppins_init.variable}`}>{children}</body>
    </html>
  );
}
