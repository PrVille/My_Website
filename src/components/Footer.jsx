import { Box, Typography } from "@mui/material"
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        bgcolor: "grey",
      }}
    >
      <Typography variant="body1">My sticky footer.</Typography>
    </Box>
  )
}

export default Footer
