import styled from 'styled-components';
import { Box } from '@mui/system';

export const FeatureBox = styled(Box)`
  display: flex;
  align-items: center;
  font-size: 100px;
  margin: 0 1rem;
  .MuiTypography-root {
    font-size: 24px;
    color: #000;
  }
`;
export const Link = styled.a`

  color: #5a5a5e;
  text-decoration: none;
  &:hover {
    color: #008c8e;
    text-decoration: none;
  }
`;