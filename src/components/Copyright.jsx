import { useTheme } from "@mui/material"

import Typography from "@mui/material/Typography"

const Copyright = () => {
    const theme = useTheme()
  return (
    <Typography variant="body2" color={theme.palette.text.secondary}>
      © {new Date().getFullYear()} Ville Prami
    </Typography>
  )
}

export default Copyright
