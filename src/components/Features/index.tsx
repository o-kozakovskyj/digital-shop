import { Box, Button, ImageList, ImageListItem, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import type Feature from "../../entitles/feature";
import * as Styled from "./Features.styled";
import { getFeatures } from "@/gateways/gateway";
import { useEffect, useState } from "react";

const Features = () => {
  const [features, setFeatures] = useState<Feature[]>([]);
  useEffect(() => {
    getFeatures()
      .then((res) => {
        setFeatures(res);
      })
  }, []);
  return (
    <Styled.FeaturesBox>
      <Styled.FilterButtonBox>
        <Typography>Sort by Author</Typography>
        <Button>Ascend</Button>
        <Button>Descend</Button>
      </Styled.FilterButtonBox>
      {features.map(item => {
        return (
          <Box key={item.id}>
            <Link href={`/features/${item.id}`} passHref legacyBehavior>
              <Styled.LinkAnchor>
                <Styled.ImageBox>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={200}
                    height={300} priority
                  />
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