import { Button } from "@mui/material"
import Image from "next/image"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from "next/link";
import * as Styled from './MainBanner1.styled';

const MainBanner1: React.FC = () => {
  return (
    <Styled.BannerBox>
      <Styled.TextBox>
        <Styled.Title>
          Everything you need in digital world
        </Styled.Title>
        <Styled.Text>
          audiobooks, e-books, photography, software, memberships, event tickets, online courses, and much more.
        </Styled.Text>
        <Button>
          <Link href={"/features"} passHref legacyBehavior>
            <Styled.LinkAnchor>
              Explore our features
              <ArrowForwardIcon />
            </Styled.LinkAnchor>
          </Link>
        </Button>
      </Styled.TextBox>
      <Styled.ImageBox>
        <Image
          src={"./images/goods.svg"}
          alt={"Goods"}
          layout="fill"
          objectFit="cover"
        >
        </Image>
      </Styled.ImageBox>
    </Styled.BannerBox>
  )

}
export default MainBanner1;