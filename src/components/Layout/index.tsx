import Footer from "../Footer";
import Header from "../Header";
import * as Styled from './Layout.styled';

type LayoutProps = {
  children: React.ReactNode;
};
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return(
  <Styled.LayoutBox>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </Styled.LayoutBox>
  )
  

}
export default Layout;