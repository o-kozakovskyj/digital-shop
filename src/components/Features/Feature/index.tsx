import { Box } from "@mui/material";
import Image from "next/image";
type FeatureProps = {
  title: string;
  description: string;
  image: string;
  author: string;
};

const Feature: React.FC<FeatureProps> = (props) => {
  const{title, image} = props;
  return (
      <Box sx={{display: "flex"}}>
        <Image src={image} alt={title} width={200} height={300} />
      </Box>
  )

}

export default Feature;