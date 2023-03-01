import { Box } from "@mui/material"
import Typography from "@mui/material/Typography"

const Logo = () => {
  return(
    <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
      <Box sx={{border: "1px solid #008c8e", marginRight: "2px"}}>
      <Typography sx={{padding: "2px", fontWeight: 600, fontSize: "1.2rem"}}>
        No
      </Typography>
    </Box>
    <Typography sx={{color: "#3e3f3d",fontWeight: 600,fontSize: "1.1rem"}}>
      Name
    </Typography>
    </Box>
    
  )
}
export default Logo