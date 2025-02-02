import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/Components/Navbar";
import { Footer } from "@/Components/Footer";
import { UserProvider } from "@/Contexts/UserContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <Navbar />
          {children}
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
