import { useState } from "react"

import Box from "@mui/material/Box"

import EaseIn from "../EaseIn"
import Offset from "../common/Offset"
import SectionTitle from "../common/SectionTitle"
import { useTheme } from "@mui/material"

import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const Education = () => {
  const theme = useTheme()

  return (
    <Box
      id="education"
      sx={{
        bgcolor: "",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Offset />
      <SectionTitle color={theme.palette.colors.education}>
        EDUCATION
      </SectionTitle>

      <Accordion
        defaultExpanded
        sx={{
          "&.MuiAccordion-root:before": {
            backgroundColor: "inherit",
          },
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            sx={{
              fontFamily: "monospace",
              letterSpacing: ".2rem",
              fontWeight: 700,
            }}
          >
            Aalto university
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          "&.MuiAccordion-root:before": {
            backgroundColor: "inherit",
          },
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            sx={{
              fontFamily: "monospace",
              letterSpacing: ".2rem",
              fontWeight: 700,
            }}
          >
            University of Helsinki
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default Education
