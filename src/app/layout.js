
//react-router-dom work  < 6
// route kết xuất, br và rs is syntax
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
import RouterControls from "./RouterControls";


export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body >
     
      <RouterControls>
   
      </RouterControls>
        
      </body>
    </html>
  );
}
