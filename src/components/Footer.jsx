import { useTheme } from "@mui/material"

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"

import Copyright from "./Copyright"

const Footer = () => {
  const theme = useTheme()

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        mt: "auto",
        bgcolor: theme.palette.background.secondary,
      }}
    >
      <Container maxWidth={false}>
        <Copyright />
      </Container>
    </Box>
  )
}

export default Footer
