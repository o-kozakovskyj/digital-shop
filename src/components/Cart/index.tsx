import { Clear } from "@mui/icons-material";
import { Box, IconButton, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { selectCart, deleteFeature } from "./CartSlice";
import * as Styled from "./Cart.styled";
import Feature from "@/entitles/feature";
import Image from "next/image";
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
            <TableCell>
            <Styled.ImageBox >
                <Image src={item.image} alt={item.title} width={20} height={30} />
              <Styled.Title>{item.title}</Styled.Title>
              </Styled.ImageBox>
              
              </TableCell>
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