import * as React from 'react';
import { AppBar, Box, Divider, List, Toolbar, Button, Badge } from '@mui/material';
import Link from 'next/link';
import { ShoppingBasket, Menu } from '@mui/icons-material';
import Logo from '../Logo';
import * as Styled from './Header.styled';
import { useSelector } from 'react-redux';
import { selectCart } from '../Cart/CartSlice';

interface HeaderProps {
  window?: () => Window;
}
const navItems = ['home', 'features', 'contact', 'login'];

const Header = (props: HeaderProps) => {
  const cartList = useSelector(selectCart);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Logo />
      <Divider />
      <List>
        {navItems.map((item) => (
          <Styled.SideMenuItem key={item}>
            <Link href={item === 'home' ? '/' : `/${item}`} passHref legacyBehavior>
              <Styled.LinkAnchor>
                {item.toUpperCase()}
              </Styled.LinkAnchor>
            </Link>
          </Styled.SideMenuItem>
        ))}
        <Link href={"/cart"} passHref legacyBehavior>
          <Styled.LinkAnchor>
            <Badge badgeContent={cartList.length} color="error">
              <ShoppingBasket fontSize="medium" />
            </Badge>
          </Styled.LinkAnchor>
        </Link>
      </List>
    </Box>
  );
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Styled.HeaderBox>
      <AppBar component="nav">
        <Toolbar>
          <Styled.MenuButton onClick={handleDrawerToggle}>
            <Menu />
          </Styled.MenuButton>
          <Box>
            <Logo />
          </Box>
          <Styled.HeaderMenuBox>
            {navItems.map((item) => (
              <Button key={item}>
                <Link href={item === 'home' ? '/' : `/${item}`} passHref legacyBehavior>
                  <Styled.LinkAnchor>{item}</Styled.LinkAnchor>
                </Link>
              </Button>
            ))}
            <Link href={"/cart"} passHref legacyBehavior>
              <Styled.LinkAnchor>
              <Badge badgeContent={cartList.length} color="error">
                <ShoppingBasket fontSize="medium" />
              </Badge>
              </Styled.LinkAnchor>
            </Link>
          </Styled.HeaderMenuBox>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Styled.SideMenuBox
          container={container}
          open={mobileOpen}
          onClose={handleDrawerToggle}
        >
          {drawer}
        </Styled.SideMenuBox>
      </Box>
    </Styled.HeaderBox>
  );
}
export default Header;