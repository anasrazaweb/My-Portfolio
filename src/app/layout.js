import { Inter } from "next/font/google";
import "./globals.css";
import LocalFont from 'next/font/local'
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const Logo = LocalFont({
  src: [
    {
      path: '../../public/fonts/Brolink.otf'
    }
  ],
  variable: "--font-logo"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Logo.variable}`}>{children}</body>
    </html>
  );
}
