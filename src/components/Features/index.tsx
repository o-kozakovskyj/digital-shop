import { Box, ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";
import data from "public/data";

const Features = () => {
  return (
    <ImageList sx={{ width: "100%", margin: "80px 20px" }} cols={4} rowHeight={300}>
      {data.map(item => {
        return (
          <ImageListItem key={item.id}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Image src={item.image} alt={item.title} width={200} height={300} />
            </Box>
          </ImageListItem>
        )
      })
      }
    </ImageList>

  );
};
export default Features;