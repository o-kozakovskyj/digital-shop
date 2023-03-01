import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Logo from '../Logo';
import { Instagram, Facebook, Twitter, YouTube, LinkedIn, GitHub } from '@mui/icons-material';
import { Button, ButtonGroup, Divider } from '@mui/material';

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <Box
        component="footer"
        sx={{
           backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Box p="10px 0 10px 0px">
          <Box sx={{ display: "flex", ml: "10px"}}>
            <Logo />
            <Box sx={{ml: "20px"}}>
              <Typography>Home</Typography>
              <Typography>Features</Typography>
              <Typography>Contact Us</Typography>
            </Box>
          </Box>
          <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", borderTop: "1px solid #FFF"}}>
            <Box>       
             <ButtonGroup >
                <Button sx={{ color: "#000" }}><Instagram /></Button>
                <Button sx={{ color: "#000" }}> <Facebook /></Button>
                <Button sx={{ color: "#000" }}><Twitter /></Button>
                <Button sx={{ color: "#000" }}><YouTube /></Button>
                <Button sx={{ color: "#000" }}><LinkedIn /></Button>
                <Button sx={{ color: "#000" }}><GitHub /></Button>
              </ButtonGroup>
            </Box>
            <Box >
              <Typography variant="body2" color="text.secondary" align="center" display="flex">
                {'© '}
                <Link color="inherit" href="https://github.com/o-kozakovskyj">
                  Oleksij Kozakovskyj
                </Link> 2023              
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
