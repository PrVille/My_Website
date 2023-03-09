import {
  AppBar,
  Alert,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
} from "@mui/material"

import MenuIcon from "@mui/icons-material/Menu"

const NavigationBar = () => {
  return (
    <>
      <AppBar position="sticky">
        <Alert severity="warning">
          This website is under active development!
        </Alert>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <MenuItem>
            <Typography variant="h6">Ville Prami</Typography>
          </MenuItem>
          <MenuItem>
            <Typography textAlign="center">About</Typography>
          </MenuItem>
          <MenuItem>
            <Typography textAlign="center">Skills</Typography>
          </MenuItem>
          <MenuItem>
            <Typography textAlign="center">Projects</Typography>
          </MenuItem>
          <MenuItem>
            <Typography textAlign="center">Contact</Typography>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavigationBar
