import { Box } from '@mui/material'
import styled from 'styled-components'

export const FooterBox = styled(props => <Box {...props} />)`
  padding: 10px 0 10px 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: lightGrey;
`
export const FooterMenu = styled(props => <Box {...props} />)`
  display: flex;
  margin-left: 10px; 
  .MuiTypography-root {
    cursor: pointer;
    font-weight: 600;
  }
  .MuiBox-root {
     margin-left: 20px;
  }
`
export const SocialBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 10px;
  border-top: 1px solid #5a5a5e;
  .MuiButton-root {
    border: none;
    color: #5a5a5e;
  } 
  .MuiButton-root:hover {
    color: #008c8e;
  }
`
export const FooterMenuBox = styled(Box)`
  display: flex;
  flex-direction: column;
`
export const Link = styled.a`
  color: #5a5a5e;
  text-decoration: none;
  font-size: 0.8rem;
  padding:0;
  margin: 0;
  &:hover {
    color: #008c8e;
    text-decoration: none;
  }
`;