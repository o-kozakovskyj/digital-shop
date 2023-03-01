import { Box, Button, Typography } from "@mui/material"
import Image from "next/image"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MainBanner: React.FC = () => {
  return (
    <Box sx={{ display: "flex", width: "100%", padding: "0 20px", marginTop: "40px" }}>
      <Box sx={{ width: "40%", zIndex: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          Everything you need in digital world
        </Typography>
        <Typography variant="h6">
          audiobooks, e-books, photography, software, memberships, event tickets, online courses, and much more.
        </Typography>
        <Button sx={{color:"#008c8e"}}>
          Explore our features
          <ArrowForwardIcon />
        </Button>
      </Box>
      <Box sx={{ width: "60%", position: "relative" }}>
        <Image src={"./images/goods.svg"} alt={"Goods"} layout="fill" objectFit="cover"></Image>
      </Box>

    </Box>
  )

}
export default MainBanner