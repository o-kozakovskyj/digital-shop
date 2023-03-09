import { Box, Paper, Typography } from "@mui/material";
import { auth } from "../../../firebase/firebaseApp";
import Image from "next/image";
import * as Styled from "./PersonalPage.styled";

const PersonalPage:React.FC = () => {
  return (
    <Styled.PageBox>
      <Paper>
        <Typography variant="h4">
          Personal page
        </Typography>
        <Box>
          <Image
            src={`${auth?.currentUser?.photoURL}`}
            alt={`${auth?.currentUser?.displayName}`}
            width={300}
            height={400}
          />
        </Box>
        <Typography variant="h5">
          User name: {auth?.currentUser?.displayName}
        </Typography>
        <Typography variant="h5">
          User email: {auth?.currentUser?.email}
        </Typography>
      </Paper>
    </Styled.PageBox>
  );
};
export default PersonalPage;