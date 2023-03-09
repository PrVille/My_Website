import { useSelector, useDispatch } from "react-redux"
import { toggleTheme } from "../store/reducers/themeSlice"
import { Typography, Box, IconButton } from "@mui/material"
import { useTheme } from "@mui/material/styles"

import Brightness4Icon from "@mui/icons-material/Brightness4"
import Brightness7Icon from "@mui/icons-material/Brightness7"


const Home = () => {
  const dispatch = useDispatch()
  const darkMode = useSelector((state) => state.theme.darkMode)

  const theme = useTheme()

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          p: 3,
        }}
      >
        <Typography>{darkMode ? "Dark" : "Light"} Mode</Typography>
        <IconButton
          sx={{ ml: 1 }}
          onClick={() => dispatch(toggleTheme())}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>

      </Box>
    </>
  )
}

export default Home
