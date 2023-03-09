import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import styled from "styled-components";
import { LinkAnchor } from "../Footer/Footer.styled";

export const SignInContainer = styled(Box)`
  margin: auto;
  max-width: 400px;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .MuiAvatar-root {
    margin: 8px;
    background-color:#008c8e 
  }
`
export const Title = styled((props) => <Typography {...props} component="h1" variant="h5" />)``
export const Form = styled((props) => <Box {...props} component="form" noValidate />)`
  margin-top: 8px;
`
export const EmailInput = styled((props) => <TextField {...props}
  margin="normal"
  required
  fullWidth
  id="email"
  label="Email Address"
  name="email"
  autoComplete="email"
  autoFocus
  color='secondary'
/>
)``;

export const Passwordnput = styled((props) => <TextField {...props}
  margin="normal"
  required
  fullWidth
  name="password"
  label="Password"
  type="password"
  id="password"
  autoComplete="current-password"
  color='secondary'
/>
)``;
export const RememberBox = styled((props) => <FormControlLabel
  {...props}
  control={<Checkbox value="remember" color="secondary" />}
  label="Remember me"
  color='secondary'
/>
)``;
export const GoogleButton = styled((props) => <Button {...props}

  fullWidth
  variant="contained"
  color='primary'
/>
)`
border: 1px solid #008c8e;
  margin: 24px 0px;
`;
export const SubmitButton = styled((props) => <Button {...props}
  
  fullWidth
  variant="contained"
  color='secondary'
/>
)`
  margin: 24px 0px;
`;
export const Anchor = styled.a`
  color: #008c8e;
  text-decoration: none;
  &:hover {
    color: #008c8e;
    text-decoration: none;
  }
`;
export const AlreadyTitle = styled((props) => <Typography {...props} component="h1" variant="h5" />)`
display: flex;
  justify-content: space-around;
  margin: 12px;
  color: #5a5a5e;
`;
