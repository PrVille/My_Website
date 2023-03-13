import { useState, cloneElement } from "react"
import { useSelector, useDispatch } from "react-redux"
import { toggleTheme } from "../store/reducers/themeSlice"
import { useTheme } from "@mui/material"

import Alert from "@mui/material/Alert"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Collapse from "@mui/material/Collapse"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import useScrollTrigger from "@mui/material/useScrollTrigger"
import Fab from "@mui/material/Fab"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import Fade from "@mui/material/Fade"
import MenuItem from "@mui/material/MenuItem"

import Offset from "./common/Offset"

import Brightness4Icon from "@mui/icons-material/Brightness4"
import Brightness7Icon from "@mui/icons-material/Brightness7"
import CloseIcon from "@mui/icons-material/Close"

const ElevationScroll = ({ children }) => {
  const theme = useTheme()
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return cloneElement(children, {
    sx: {
      boxShadow: trigger ? theme.palette.shadows.lg : theme.palette.shadows.sm,
    },
  })
}

const ScrollTop = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = (event) => {
    window.scrollTo({ top: 0 });
  }

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  )
}

const pages = [
  { label: "About", to: "#about" },
  { label: "Skills", to: "#skills" },
  { label: "Projects", to: "#projects" },
  { label: "Contact", to: "#contact" },
]

const Header = (props) => {
  const dispatch = useDispatch()
  const theme = useTheme()
  const darkMode = useSelector((state) => state.theme.darkMode)
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [alertOpen, setAlertOpen] = useState(true)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar position="fixed">
          <Collapse in={alertOpen}>
            <Alert
              severity="warning"
              action={
                <IconButton
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setAlertOpen(false)
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              Website is under active development!
            </Alert>
          </Collapse>
          <Container maxWidth={false} sx={{ bgcolor: "background.header" }}>
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                  opacity: 1,
                  transition: "all .2s ease-in-out",
                  ":hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                VILLE PRAMI
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>

                <Menu
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  disableScrollLock={true}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem
                      key={page.label}
                      onClick={handleCloseNavMenu}
                      sx={{
                        transition: "all .2s ease-in-out",
                        ":hover": {
                          transform: "scale(1.1)",
                          backgroundColor: "pink",
                        },
                      }}
                    >
                      <Typography
                        component="a"
                        href={page.to}
                        textAlign="center"
                        sx={{
                          fontFamily: "monospace",
                          fontWeight: 700,
                          letterSpacing: ".1rem",
                          color: "inherit",
                          textDecoration: "none",
                        }}
                      >
                        {page.label}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  alignSelf: "center",
                }}
              >
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
                    flexGrow: 0,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                    transition: "all .2s ease-in-out",
                    ":hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  VILLE PRAMI
                </Typography>
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <MenuItem
                    key={page.label}
                    sx={{
                      transition: "all .2s ease-in-out",
                      ":hover": {
                        transform: "scale(1.1)",
                        backgroundColor: "pink",
                      },
                    }}
                  >
                    <Typography
                      component="a"
                      href={page.to}
                      textAlign="center"
                      sx={{
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: ".1rem",
                        color: "inherit",
                        textDecoration: "none",
                      }}
                    >
                      {page.label}
                    </Typography>
                  </MenuItem>
                ))}
              </Box>

              <Box>
                <IconButton
                  onClick={() => dispatch(toggleTheme())}
                  color="inherit"
                  sx={{
                    transition: "all .2s ease-in-out",
                    ":hover": {
                      transform: "scale(1.2)", 
                    },
                  }}
                >
                  {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Offset />

      <ScrollTop {...props}>
        <Fab
          size="small"
          sx={{
            transition: "all .2s ease-in-out",
            "&:hover": {
              transform: "scale(1.2)",
            },
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  )
}

export default Header
