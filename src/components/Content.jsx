import Container from "@mui/material/Container"

import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

const Content = () => {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          flex: 1,
          pt: 15,
        }}
      >
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Container>
    </>
  )
}

export default Content
