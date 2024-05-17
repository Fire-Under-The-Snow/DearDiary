import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Leftpanel from "@/components/panel/Leftpanel";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DearDiary",
  description: "A Next Generation AI emotion Diary",
};

export default  function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        <div className=" flex flex-col ">
        <Navbar/>
         <div className=" h-delekheight flex">
        <Leftpanel/>
        {children}
        </div>
        {/* <Footer/> */}
        </div>
      
        </body>
    </html>
  );
}
