import { Routes, Route } from "react-router-dom"

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
          pt: 20,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </>
  )
}

export default Content
