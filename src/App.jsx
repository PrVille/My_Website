import { useState, useMemo } from "react"
import { useSelector } from "react-redux"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { getDesignTokens } from "./theme"

import CssBaseline from "@mui/material/CssBaseline"
import Container from "@mui/material/Container"
import Footer from "./components/Footer"
import NavigationBar from "./components/NavigationBar"
import Content from "./components/Content"

const App = () => {
  const [mode, setMode] = useState("light")
  const darkMode = useSelector((state) => state.theme.darkMode)

  useMemo(() => {
    if (darkMode) {
      setMode("dark")
    } else {
      setMode("light")
    }
  }, [darkMode])

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container
          maxWidth={false}
          disableGutters
          sx={{ minHeight: "200vh", flex: 1 }}
        >
          <NavigationBar />
          <Content />
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
