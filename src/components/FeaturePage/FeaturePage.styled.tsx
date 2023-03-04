import { Box, Button, Paper } from '@mui/material';
import styled from 'styled-components';

export const FeatureContainer = styled((props=> <Paper elevation={3} {...props} />))`
  padding: 2rem;
  display: flex;
  align-items: center;
  max-width: 700px;
  margin: 80px auto;
`;
export const FeatureText = styled(Box)`
  margin-left: 2rem;
.MuiTypography-root {
  margin-bottom: 1rem;
}
`
export const ToCartButton = styled((props)=><Button {...props} variant="contained"/>)`
  width: 100%;
  border-radius: 20px;
  background-color: #f0c14b;
`;