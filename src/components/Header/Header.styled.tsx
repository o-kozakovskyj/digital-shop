import { Drawer, IconButton, ListItem } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

export const LinkAnchor = styled.a`
  color: #5a5a5e;
  text-decoration: none;
  padding: 0.5rem 1rem;
  &:hover {
    color: #008c8e;
    text-decoration: none;
  }
`;
export const SideMenuItem = styled(ListItem)`
color: #5a5a5e;
 padding: 0;
`
export const HeaderBox = styled(Box)`
  display: flex;
  .MuiToolbar-root {
    display: flex;
    justify-content: space-between;
  }
`
export const MenuButton = styled((props) => <IconButton {...props} color="inherit" aria-label="open drawer"edge="start"/>)`
margin-right: 2rem;
@media (min-width: 600px) {
  display: none;
}
`
export const HeaderMenuBox = styled(Box)`
display: none;
@media (min-width: 600px) {
  display: flex;
  align-items: center;
  .MuiButton-root {
    color: #5a5a5e;
    padding: 0.5rem 1rem;
    &:hover {
      color: #008c8e;
      text-decoration: none;
    }
  }
}
`
export const SideMenuBox = styled((props)=> <Drawer {...props} variant="temporary" anchor="left" ModalProps={{keepMounted: true}} />)`
  display: block;
  @media (min-width: 600px) {
    display: none;
  }
.MuiDrawer-paper-root {
  box-sizing: border-box;
  width: 250px;

} 
  `