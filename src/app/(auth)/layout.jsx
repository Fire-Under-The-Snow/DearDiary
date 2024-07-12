import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Auth | DearDiary",
  description: "A Next Generation AI emotion Diary",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className=" h-screen w-full">{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
