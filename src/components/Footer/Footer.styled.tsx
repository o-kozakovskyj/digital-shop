import { Box } from '@mui/material'
import styled from 'styled-components'

export const FooterBox = styled(props=><Box {...props} />)`
  padding: 10px 0 10px 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: lightGrey;
`
export const FooterMenu = styled(props=><Box {...props} />)`
display: flex;
margin-left: 10px; 
.MuiTypography-root {
cursor: pointer;
font-weight: 600;
}
`