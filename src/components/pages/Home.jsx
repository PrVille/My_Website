import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

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
        pt: 10,
        pb: 30 
      

      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: "monospace",
          letterSpacing: ".1rem",
          fontWeight: 700,
          textAlign: "center"
        }}
      >
        SOFTWARE ENGINEER & FULL STACK WEB DEVELOPER
      </Typography>
    </Box>
  )
}

export default Home
