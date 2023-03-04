import styled from 'styled-components';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

export const BannerBox = styled(Box)`
  display: flex;
  width: 100%;
  padding: 0 20px;
  margin-top: 60px;
  .MuiButton-root {
    color:#008c8e;
  }
`;
export const TextBox = styled(Box)`
  width: 50%;
  margin-top: 10px;
  z-index: 2;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const Title = styled(props => <Typography {...props} />)`
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 1rem;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;
export const Text = styled(props => <Typography {...props} />)`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 1rem;
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;
export const ImageBox = styled(Box)`
  position: relative;
  width: 50%;
  z-index: 1;
  @media (max-width: 600px) {
    display: none;
  }
`;
export const Link = styled.a`
  display: flex;
  color: #008c8e;
  text-decoration: none;
  padding: 0.5rem 1rem;
  &:hover {
    color: #5a5a5e;
    text-decoration: none;
  }
`;