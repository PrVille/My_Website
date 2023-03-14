import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import EaseIn from "../EaseIn"
import Offset from "../common/Offset"
import SectionTitle from "../common/SectionTitle"
import { useTheme } from "@mui/material"


const Projects = () => {
  const theme = useTheme()

  return (
    <Box
      id="projects"
      sx={{
        bgcolor: "",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Offset />
      <SectionTitle color={theme.palette.colors.projects}>PROJECTS</SectionTitle> 
    </Box>
  )
}

export default Projects
