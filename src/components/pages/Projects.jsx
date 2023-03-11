import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import EaseIn from "../EaseIn"

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        bgcolor: "",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "monospace",
            letterSpacing: ".5rem",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          PROJECTS
        </Typography>
    </Box>
  )
}

export default Projects
