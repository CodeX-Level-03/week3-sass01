// import { Inter } from "next/font/google";
import "./globals.css";
import "./styles/sass/main.scss";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "sass-styles",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
