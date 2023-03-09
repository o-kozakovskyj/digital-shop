import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useDispatch } from "react-redux";
import { addFeature } from "../Cart/CartSlice";
import { auth } from '../../../firebase/firebaseApp';
import DialogWindow from '../DialogWindow';
import { useEffect, useState } from 'react';
import { getFeature } from "@/gateways/gateway";
import * as Styled from './FeaturePage.styled';
import Feature from '@/entitles/feature';

const FeaturePage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [feature, setFeature] = useState<Feature>({
    id: 0,
    title: '',
    author: '',
    description: '',
    price: 0,
    image: '',
  });
  const id = Number(useRouter().query.feature);
  useEffect(() => {
    getFeature(id)
      .then((res) => {
        setFeature(res);
      })
  }, []);
  
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    if (!auth.currentUser) {
      setIsDialogOpen(true);
    } else {
      dispatch(addFeature(feature));
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
          src={feature.image}
          alt={feature.title}
          width={300}
          height={400}
        />
      </Box>
      <Styled.FeatureText>
        <Typography variant="h5">
          {feature.title}
        </Typography>
        <Typography variant="h6" >
          {feature.author}
        </Typography>
        <Typography variant="body1">
          {feature.description}
        </Typography>
        <Typography variant="h4">
          {feature.price}$
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