import { Box, Paper, Typography } from "@mui/material";
import { url } from "inspector";
import { Router, useRouter } from "next/router";
import { auth } from "../../../firebase/firebaseApp";
import Image from "next/image";
import DialogWindow from "../DialogWindow";
import { useState } from "react";

const PersonalPage = () => {
  
    return (
      <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Paper sx={{ width: "400px" }}>
          <Image src={`${auth?.currentUser?.photoURL}`} alt={`${auth?.currentUser?.displayName}`} width={300} height={400} />
          <Typography variant="h4">Personal page</Typography>
          <Typography variant="h5">User name: {auth?.currentUser?.displayName}</Typography>
          <Typography variant="h5">User email: {auth?.currentUser?.email}</Typography>
        </Paper>
      </Box>

    );
  };
export default PersonalPage;