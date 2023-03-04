import { useRouter } from 'next/router';
import data from 'public/data';
import { Paper, Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import * as Styled from './FeaturePage.styled';

const FeaturePage = () => {
  
  const id = Number(useRouter().query.feature);
const featureData= data.find(item => item.id === id);
if (!featureData) return null;
  return (
    <Styled.FeatureContainer>
      <Box>
        <Image src={featureData.image} alt={featureData.title} width={300} height={400} />
      </Box>
      <Styled.FeatureText>
        <Typography variant="h5">{featureData.title}</Typography>
        <Typography variant="h6" >{featureData.author}</Typography>
        <Typography variant="body1">{featureData.description}</Typography>
        <Typography variant="h4">{featureData.price}$</Typography>
        <Styled.ToCartButton variant="contained" >Add to cart</Styled.ToCartButton>
      </Styled.FeatureText>
    </Styled.FeatureContainer>
  );
}
export default FeaturePage;