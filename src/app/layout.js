import { Manrope } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import DarkLight from "@/components/Common/DarkLight";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Codix",
  description: "Codix",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className={manrope.className + " overflow-x-hidden"}>
        <Navbar />
        {children}
        <DarkLight />
        <Footer />
      </body>
    </html>
  );
}
