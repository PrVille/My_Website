import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import EaseIn from "../EaseIn"
import Offset from "../common/Offset"
import SectionTitle from "../common/SectionTitle"
import { useTheme } from "@mui/material"
import useStopWatch from "../../hooks/UseStopWatch"

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx"
import oneLight from "react-syntax-highlighter/dist/esm/styles/prism/one-light"
import oneDark from "react-syntax-highlighter/dist/esm/styles/prism/one-dark"

SyntaxHighlighter.registerLanguage("jsx", jsx)

const About = () => {
  const theme = useTheme()
  const darkMode = theme.palette.darkMode
  const { years, months, days, hours, minutes, seconds } = useStopWatch()

  return (
    <Box
      id="about"
      sx={{
        bgcolor: "",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Offset />
      <SectionTitle color={theme.palette.colors.about}>ABOUT</SectionTitle>
      <SyntaxHighlighter
        language="jsx"
        style={darkMode ? oneDark : oneLight}
        wrapLongLines={false}
      >
        {`const me = {
  name: "Ville Prami",
  country: "Finland",
  city: "Helsinki",
  titles: [
    "software engineer", 
    "full stack web developer"
  ],
  studying: "computer science",
  school: "Aalto university",
  developerFor: {
    years: ${years},
    months: ${months},
    days: ${days},
    hours: ${hours},
    minutes: ${minutes},
    seconds: ${seconds}
  }
}`}
      </SyntaxHighlighter>
    </Box>
  )
}

export default About
