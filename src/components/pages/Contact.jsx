import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import EaseIn from "../EaseIn"

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        bgcolor: "",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <EaseIn>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "monospace",
            letterSpacing: ".5rem",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          CONTACT
        </Typography>
      </EaseIn>
    </Box>
  )
}

export default Contact
