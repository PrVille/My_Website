import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import EaseIn from "../EaseIn"

const About = () => {
  return (
    <Box
      sx={{
        bgcolor: "",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        pb: 10
      }}
    >

      <Box sx={{ display: "flex" }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "monospace",
              letterSpacing: ".1rem",
              fontWeight: 700,
            }}
          >
            WELCOME.
          </Typography>
      </Box>

      <Box sx={{ flex: 1, pt: 5, px: 20, bgcolor: "" }}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "monospace",
              letterSpacing: ".1rem",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            My name is Ville Prami and I'm a software engineer and a full stack
            web developer based in Helsinki, Finland. I'm currently studying
            computer science at Aalto university.
          </Typography>
      </Box>
    </Box>
  )
}

export default About
