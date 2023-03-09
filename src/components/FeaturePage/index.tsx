import { useRouter } from 'next/router';
import data from '@/common/data/data';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useDispatch } from "react-redux";
import { addFeature } from "../Cart/CartSlice";
import { auth } from '../../../firebase/firebaseApp';
import DialogWindow from '../DialogWindow';
import { useState } from 'react';
import * as Styled from './FeaturePage.styled';

const FeaturePage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const id = Number(useRouter().query.feature);
  const featureData = data.find(item => item.id === id);
  if (!featureData) return null;
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    if (!auth.currentUser) {
      setIsDialogOpen(true);
    } else {
      dispatch(addFeature(featureData));
    }
  };
  const alertWindow = isDialogOpen
    ? <DialogWindow
      onclose={() => setIsDialogOpen(false)}
      isDialogOpen={isDialogOpen}
      message={"To buy this book you need to log in."}
    />
    : null;
  return (<>
    {alertWindow}
    <Styled.FeatureContainer>
      <Box>
        <Image
          src={featureData.image}
          alt={featureData.title}
          width={300}
          height={400}
        />
      </Box>
      <Styled.FeatureText>
        <Typography variant="h5">
          {featureData.title}
        </Typography>
        <Typography variant="h6" >
          {featureData.author}
        </Typography>
        <Typography variant="body1">
          {featureData.description}
        </Typography>
        <Typography variant="h4">
          {featureData.price}$
        </Typography>
        <Styled.ToCartButton variant="contained" onClick={handleAddToCart}>
          Add to cart
        </Styled.ToCartButton>
      </Styled.FeatureText>
    </Styled.FeatureContainer>
  </>
  );
}
export default FeaturePage;