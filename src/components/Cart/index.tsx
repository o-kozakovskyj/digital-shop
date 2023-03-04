import { Clear, Delete, DeleteOutline } from "@mui/icons-material";
import { Box, Button, Table, TableBody, TableCell, TableFooter, TableHead, TableRow, Typography } from "@mui/material";
import cart from "public/cart";
import * as Styled from "./Cart.styled";

const Cart = () => {

  return (
    <Styled.CartBox>
      <Typography variant="h6">Cart</Typography>
      <Table >
      <TableBody>
        {cart.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.title}</TableCell>
            <TableCell align="right">
              {item.price}$<Button>
                <Clear fontSize="inherit" color="secondary"/>
              </Button>
            </TableCell>       
          </TableRow>
        ))}
        <TableRow>
          <Styled.Cell>Total</Styled.Cell>
          <Styled.Cell align="right">{80}$</Styled.Cell>
        </TableRow>
      </TableBody>
      </Table>

    </Styled.CartBox>
  );
};
export default Cart;