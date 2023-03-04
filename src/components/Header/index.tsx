import * as React from 'react';
import { AppBar, Box, Divider, List, Toolbar, Button } from '@mui/material';
import Link from 'next/link';
import { ShoppingBasket, Menu } from '@mui/icons-material';
import Logo from '../Logo';
import * as Styled from './Header.styled';

interface HeaderProps {
  window?: () => Window;
}
const navItems = ['home', 'features', 'contact', 'login'];

const Header = (props: HeaderProps) => {
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
              <Styled.Link>
                {item.toUpperCase()}
              </Styled.Link>
            </Link>
          </Styled.SideMenuItem>
        ))}
        <Link href={"/cart"} passHref legacyBehavior>
          <Styled.Link>
            <ShoppingBasket fontSize="inherit" />
          </Styled.Link>
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
                  <Styled.Link>{item}</Styled.Link>
                </Link>
              </Button>
            ))}
            <Link href={"/cart"} passHref legacyBehavior>
              <Styled.Link>
                <ShoppingBasket fontSize="inherit" />
              </Styled.Link>
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