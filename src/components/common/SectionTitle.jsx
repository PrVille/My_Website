import Typography from "@mui/material/Typography"

import Underline from "./Underline"

const SectionTitle = ({ children, color }) => {
  return (
    <Typography
      variant="h2"
      sx={{
        fontFamily: "monospace",
        letterSpacing: ".3rem",
        fontWeight: 700,
        mb: 5,
      }}
    >
      <Underline color={color}>
        {children}
      </Underline>
    </Typography>
  )
}

export default SectionTitle
