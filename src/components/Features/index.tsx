import { Box, ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import data from "@/common/data/data";
import * as Styled from "./Features.styled";

const Features = () => {
  return (
    <ImageList sx={{ width: "100%", margin: "80px 20px" }} cols={4} rowHeight={300}>
      {data.map(item => {
        return (
          <ImageListItem key={item.id}>
            <Link href={`/features/${item.id}`} passHref legacyBehavior>
              <Styled.LinkAnchor>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Image src={item.image} alt={item.title} width={200} height={300} />
                </Box>
              </Styled.LinkAnchor>

            </Link>
          </ImageListItem>
        )
      })
      }
    </ImageList>

  );
};
export default Features;