import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Offset from "../common/Offset"
import Underline from "../common/Underline"

import EaseIn from "../EaseIn"

const Home = () => {
  return (
    <Box
      sx={{
        bgcolor: "",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        pb: 30,
      }}
    >
      <Offset />
      <Typography
        variant="h3"
        sx={{
          fontFamily: "monospace",
          letterSpacing: ".1rem",
          fontWeight: 700,
          textAlign: "center", 
        }}
      >
        SOFTWARE ENGINEER & FULL STACK WEB DEVELOPER
      </Typography>
    </Box>
  )
}

export default Home
