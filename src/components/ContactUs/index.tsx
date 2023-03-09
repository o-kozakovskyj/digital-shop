import { Typography } from "@mui/material";
import * as Styled from './ContactUs.styled'

const ContactUs: React.FC = () => {
  return (
    <Styled.contactsBox>
      <Typography variant="h3">
        Are you a customer who needs help? That’s what the  NoName TEAM is for.
      </Typography>
      <Typography variant="h6">
        If you’re wondering about an order, our products,
        or our website, shoot them an email at&nbsp;
        <a href="mailto: abc@example.com">
          info@noname.com
        </a>
        &nbsp; or check out the  at&nbsp;
        <a href="#">Help & FAQs section
        </a>
        &nbsp; —the answer might be there already!
      </Typography>
      <Typography variant="h6">
        For everything else...
      </Typography>
      <Typography>
        Phone:
      </Typography>
      +38050322223
      <Typography>
        Office:
      </Typography>
      02102 Kyiv Malevicha str. 26
    </Styled.contactsBox>
  );
};
export default ContactUs;