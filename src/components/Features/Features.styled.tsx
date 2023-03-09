import { Box, Button } from '@mui/material';
import styled from 'styled-components';

export const FeaturesBox = styled(Box)`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
overflow: hidden;
  width: 100%;
  padding:20px;
  margin-top: 10px;
`;
  export const FilterButtonBox = styled(Box)`
    display: flex;
    justify-items: center;
    align-items: center;
    color: #5a5a5e;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 10px;
    border: 1px solid #5a5a5e;
    border-radius: 5px;
    margin: 80px 10px 10px 10px;
    .MuiTypography-root {
      font-size: 1.2rem;
    }
    cursor: pointer;
    &:hover {
      color: #008c8e;
      border: 1px solid #008c8e;
    }
  `;
export const FilterButton = styled(Button)`
  color: #5a5a5e;
  font-weight: 600;
  padding: 4px;
  margin: 0 16px;
  border: 1px solid #5a5a5e;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    color: #008c8e;
    border: 1px solid #008c8e;
  }
`;


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