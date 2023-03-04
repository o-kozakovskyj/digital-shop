import Book from "@/entitles/book";
import { getBooks } from "@/gateways/gateway";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
type FeatureProps = {
  title: string;
  description: string;
  image: string;
  author: string;
};

const Feature: React.FC<FeatureProps> = (props) => {
  const{title, description, image, author} = props;
  return (
      <Box sx={{display: "flex"}}>
        <Image src={image} alt={title} width={200} height={300} />
      </Box>
  )

}

export default Feature;