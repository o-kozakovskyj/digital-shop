import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as Styled from "./Logo.styled";

const Logo: React.FC = () => {
  return (
    <Styled.LogoBox>
      <Styled.Frame>
        <Styled.NoTitle>
          No
        </Styled.NoTitle>
      </Styled.Frame>
      <Styled.NameTitle>
        Name
      </Styled.NameTitle>
    </Styled.LogoBox>

  )
}
export default Logo