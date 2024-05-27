
import "./globals.css";

import "@/styles/config.css";
import "@/styles/main.css";
import "@/styles/intersection.css";
import "@/styles/home.css";
import "@/styles/grid.css";
import "@/styles/lenis.css";
import "@/styles/footer.css";
import "@/styles/navbar.css";
import "@/styles/reponsive.css";
import "@/styles/clone.css";
import "@/styles/config_clone.css";
import RouterControls from "./RouterControls";
import LenisScrolling from "@/components/LenisScrolling";
import CacheImageGroup from "@/components/new/CacheImageGroup";


export default function RootLayout({ children }) {
 
  return (
    <html lang="vi">
      <body >
     {/*  <LenisScrolling>
      { children }
      </LenisScrolling> */}
      <CacheImageGroup />
      <RouterControls>
      { children }
      </RouterControls>
        
      </body>
    </html>
  );
}
