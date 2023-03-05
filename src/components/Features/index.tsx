import { Box, ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import type Feature from "../../entitles/feature";
import * as Styled from "./Features.styled";
import { getFeatures } from "@/gateways/gateway";
import { useEffect, useState } from "react";

const Features = () => {
  const [data, setData] = useState<Feature[]>([]);
  useEffect(() => {
    getFeatures()
      .then((res) => {
        setData(res);
      })
  }, []);
  console.log(data.data)
  return (
    <Styled.FeaturesBox>
      {data.map(item => {
        return (
          <Box key={item.id}>
            <Link href={`/features/${item.id}`} passHref legacyBehavior>
              <Styled.LinkAnchor>
                <Styled.ImageBox sx={{ display: "flex", alignItems: "center" }}>
                  <Image src={item.image} alt={item.title} width={200} height={300} priority/>
                </Styled.ImageBox>
              </Styled.LinkAnchor>

            </Link>
          </Box>
        )
      })
      }
    </Styled.FeaturesBox>

  );
};
export default Features;