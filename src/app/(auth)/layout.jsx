import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Auth | DearDiary",
  description: "A Next Generation AI emotion Diary",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" h-screen w-full">
        {children}
        </div>
       
        </body>
    </html>
  );
}
