import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import EaseIn from "../EaseIn"
import Offset from "../common/Offset"
import SectionTitle from "../common/SectionTitle"
import { useTheme } from "@mui/material"


const Contact = () => {
  const theme = useTheme()

  return (
    <Box
      id="contact"
      sx={{
        bgcolor: "",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Offset />
      <SectionTitle color={theme.palette.colors.contact}>CONTACT</SectionTitle> 
    </Box>
  )
}

export default Contact
