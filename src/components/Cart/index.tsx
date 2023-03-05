import { Clear } from "@mui/icons-material";
import { IconButton, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { selectCart, deleteFeature } from "./CartSlice";
import * as Styled from "./Cart.styled";
import Feature from "@/entitles/feature";
import { useDispatch, useSelector } from "react-redux";

const Cart:React.FC = () => {
  const dispatch = useDispatch();
  const cartList = useSelector(selectCart);
  const total = cartList.reduce((acc, item) => acc + item.price, 0) || 0;
  const handleDelete = (id: number) => {
    dispatch(deleteFeature(id));
  };

  return (
    <Styled.CartBox>
      <Typography variant="h6">Cart</Typography>
      <Table >
      <TableBody>
        {cartList.map((item: Feature) => (
          <TableRow key={item.id}>
            <TableCell>{item.title}</TableCell>
            <TableCell align="right">
              {item.price}$
              <IconButton onClick={()=>handleDelete(item.id)}>
                <Clear 
                fontSize="inherit" 
                color="secondary" 
                 />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
        <TableRow>
          <Styled.Cell>Total</Styled.Cell>
          <Styled.Cell align="right">{total}$</Styled.Cell>
        </TableRow>
      </TableBody>
      </Table>

    </Styled.CartBox>
  );
};
export default Cart;