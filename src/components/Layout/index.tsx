import { Box, Container } from "@mui/material";
import Footer from "../Footer";
import Header from "../Header"
type LayoutProps = {
  children: React.ReactNode;
};
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return(
  <Box sx={{display:"flex", justifyContent: "space-between", flexDirection: "column", height: '100vh'}}>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </Box>
  )
  

}
export default Layout;