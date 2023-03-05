import { Box, Paper, TableCell, TableContainer } from "@mui/material";
import styled from "styled-components";


export const CartBox = styled((props) => <TableContainer {...props} />)`
margin:80px auto;
.MuiTypography-root {
  text-align: center;
  color:  #008c8e;
}
  .MuiTable-root {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    
    border-radius: 4px;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.26);
    .MuiTableCell-root {
      padding: 16px;
      border-bottom: 1px solid #e0e0e0;
      &:last-child {
        border-right: 1px solid #e0e0e0;
      }
    }
  }
`
export const Cell = styled(TableCell)`
  color:#008c8e;
`