import { Box } from "@mui/material";
import Image from "next/image";
import type Feature from "../../../entitles/feature";

const Feature: React.FC<Feature> = ({title, image}) => {
  return (
      <Box sx={{display: "flex"}}>
      <Image
        src={image}
        alt={title}
        width={200}
        height={300}
      />
      </Box>
  )
}

export default Feature;