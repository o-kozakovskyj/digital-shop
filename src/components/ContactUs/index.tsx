import {Divider, Typography } from "@mui/material";
import * as Styled from './ContactUs.styled'

const ContactUs: React.FC = () => {
  return (
    <Styled.contactsBox>
      <Typography variant="h5">
        Contact
      </Typography>
      <Divider />
      <Typography>Email:</Typography>
      info@noname.com
      <Typography>Phone:</Typography>
      +38050322223
      <Typography>Office:</Typography>
      02102 Kyiv Malevicha str. 26 
    </Styled.contactsBox>
  );
};
export default ContactUs;