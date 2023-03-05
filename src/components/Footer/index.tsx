import * as React from 'react';
import Logo from '../Logo';
import { Facebook, Twitter, YouTube, LinkedIn, GitHub } from '@mui/icons-material';
import { Button, ButtonGroup } from '@mui/material';
import * as Styled from './Footer.styled'
import Link from 'next/link';

const navItems = ['home', 'features', 'contact', 'login'];
const Footer=()=> {
  return (
    <Styled.FooterBox>
        <Styled.FooterMenu>
          <Logo />
          <Styled.FooterMenuBox>
            {navItems.map((item) => (    
                <Link href={item === 'home' ? '/' : `/${item}`}key={item} passHref legacyBehavior>
                  <Styled.LinkAnchor>{item.toUpperCase()}</Styled.LinkAnchor>
                </Link>
            ))}
          </Styled.FooterMenuBox>
        </Styled.FooterMenu>
        <Styled.SocialBox >
            <ButtonGroup >
              <Button> <Facebook /></Button>
              <Button><Twitter /></Button>
              <Button><YouTube /></Button>
              <Button><LinkedIn /></Button>
              <Button><GitHub /></Button>
            </ButtonGroup>
        </Styled.SocialBox>
    </Styled.FooterBox>

  );
}
export default Footer;