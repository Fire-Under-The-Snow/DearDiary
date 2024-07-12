import { Inter } from "next/font/google";
import "../globals.css";
import Navbar1 from "../../components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Leftpanel from "@/components/panel/Leftpanel";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DearDiary",
  description: "A Next Generation AI emotion Diary",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className=" flex flex-col ">
            <Navbar1 />

            <div className=" h-delekheight flex">
              <div className=" hidden md:flex">
                <Leftpanel />
              </div>
              {children}
            </div>
            {/* <Footer/> */}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
