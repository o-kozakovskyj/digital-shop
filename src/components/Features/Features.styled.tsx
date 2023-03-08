import { Box } from '@mui/material';
import styled from 'styled-components';

export const FeaturesBox = styled(Box)`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
overflow: hidden;
  width: 100%;
  padding:20px;
  margin-top: 60px;
`;
  export const FilterButtonBox = styled(Box)`
    display: flex;
    justify-items: center;
    align-items: center;
  `
 export const ImageBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

  
export const LinkAnchor = styled.a`
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