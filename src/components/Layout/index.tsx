import Header from "../Header"
type LayoutProps = {
  children: React.ReactNode;
};
const Layout : React.FC<LayoutProps>= ({children}) => {
  return <Header />
}
export default Layout;