import { useTheme } from "@mui/material"

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import IconButton from "@mui/material/IconButton"

import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import EmailIcon from "@mui/icons-material/Email"

import Copyright from "./Copyright"

const Footer = () => {
  const theme = useTheme()

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "",
        py: 3,
        mt: "auto",
      }}
    >
      <Container
        maxWidth={false}
        sx={{ display: "flex", flexDirection: "row", bgcolor: "" }}
      >
        <Copyright sx={{ flex: 1, alignSelf: "center" }} />

        <IconButton
          color="inherit"
          title="Ville Prami on GitHub"
          href="https://github.com/PrVille"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </IconButton>

        <IconButton
          color="inherit"
          title="Ville Prami on LinkedIn"
          href="https://www.linkedin.com/in/ville-prami/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </IconButton>

        <IconButton
          color="inherit"
          title="Send an email to Ville Prami"
          href="mailto:ville.prami@me.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailIcon />
        </IconButton>
      </Container>
    </Box>
  )
}

export default Footer
