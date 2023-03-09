import { Box } from "@mui/material";
import styled from "styled-components";

export const PageBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  .MuiPaper-root {
    max-width: 600px;
    margin-top: 60px;
  }
  .MuiBox-root {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;