import { AutoStoriesTwoTone } from "@mui/icons-material"
import { Box, Typography, Divider } from "@mui/material"
import Link from "next/link";
import * as Styled from './SectionIcon.Styled';

type SectionIconProps = {
  icon: React.ReactNode;
  section: string;
}
const SectionIcon = ({ icon, section }: SectionIconProps) => {
  return (
    <Styled.FeatureBox>
      <Link href={`/features/${section.toLowerCase()}`}>
        <Styled.Link>{icon}</Styled.Link>
      </Link>
      <Typography>{section}</Typography>
    </Styled.FeatureBox>
  )
}
export default SectionIcon;