import { useTheme } from "@mui/material"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import EaseIn from "../EaseIn"
import Offset from "../common/Offset"

import {
  SiJavascript,
  SiCplusplus,
  SiCss3,
  SiGraphql,
  SiHtml5,
  SiMarkdown,
  SiPython,
  SiScala,
  SiTypescript,
  SiApollographql,
  SiBootstrap,
  SiCypress,
  SiDeno,
  SiExpo,
  SiExpress,
  SiGithubactions,
  SiJest,
  SiMui,
  SiNpm,
  SiNodedotjs,
  SiNodemon,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiGithubpages,
  SiMongodb,
  SiSequelize,
  SiSqlite,
  SiPostgresql,
  SiVercel,
  SiCanva,
  SiDocker,
  SiEclipseide,
  SiEslint,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGooglesheets,
  SiIntellijidea,
  SiMicrosoftoffice,
  SiNginx,
  SiPostman,
  SiVisualstudiocode,
  SiVite,
} from "react-icons/si"
import { FaDatabase } from "react-icons/fa"
import SectionTitle from "../common/SectionTitle"

const styles = {
  scaleOnHover: {
    transition: "all .2s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  skillCards: {
    bgcolor: "",
    display: "flex",
    py: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "10px",
  },
  subtitle: {
    fontFamily: "monospace",
    letterSpacing: ".3rem",
    fontWeight: 700,
  },
}

const SkillCard = ({ Icon, label, size = 60 }) => {
  const theme = useTheme()

  return (
    <Box sx={styles.scaleOnHover}>
      <EaseIn randomDirection>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 1,
            boxShadow: `2px 2px 4px ${theme.palette.colors.skills}`,
            borderRadius: 3,
            width: 128,
            height: 140,
          }}
        >
          <Box>
            <Icon size={size} />
          </Box>
          <Box
            sx={{
              width: "inherit",
              p: "inherit",
              height: "inherit",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "monospace",
                letterSpacing: ".1rem",
                fontWeight: 700,
                textAlign: "center",
                verticalAlign: "center",
              }}
            >
              {label}
            </Typography>
          </Box>
        </Box>
      </EaseIn>
    </Box>
  )
}

const Skills = () => {
  const theme = useTheme()

  return (
    <Box
      id="skills"
      sx={{
        bgcolor: "",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Offset />
      <SectionTitle color={theme.palette.colors.skills}>SKILLS</SectionTitle>

      <Typography
        variant="h4"
        sx={{
          fontFamily: "monospace",
          letterSpacing: ".3rem",
          fontWeight: 700,
          mb: 5,
        }}
      >
        Technologies & Tools
      </Typography>

      <Box sx={{ flex: 1, pt: 0, px: 0, bgcolor: "" }}>
        <Typography variant="h5" sx={styles.subtitle}>
          Languages
        </Typography>
        <Box sx={styles.skillCards}>
          <SkillCard Icon={SiCplusplus} label="C++" />
          <SkillCard Icon={SiCss3} label="CSS" />
          <SkillCard Icon={SiGraphql} label="GraphQL" />
          <SkillCard Icon={SiHtml5} label="HTML" />
          <SkillCard Icon={SiJavascript} label="JavaScript" />
          <SkillCard Icon={SiMarkdown} label="Markdown" />
          <SkillCard Icon={SiPython} label="Python" />
          <SkillCard Icon={SiScala} label="Scala" />
          <SkillCard Icon={FaDatabase} label="SQL" />
          <SkillCard Icon={SiTypescript} label="TypeScript" />
        </Box>
      </Box>

      <Box sx={{ flex: 1, pt: 0, px: 0, bgcolor: "" }}>
        <Typography variant="h5" sx={styles.subtitle}>
          Frameworks & Libraries
        </Typography>
        <Box sx={styles.skillCards}>
          <SkillCard Icon={SiApollographql} label="Apollo GraphQL" />
          <SkillCard Icon={SiBootstrap} label="Bootstrap" />
          <SkillCard Icon={SiCypress} label="Cypress" />
          <SkillCard Icon={SiDeno} label="Deno" />
          <SkillCard Icon={SiExpo} label="Expo" />
          <SkillCard Icon={SiExpress} label="Express" />
          <SkillCard Icon={SiGithubactions} label="GitHub Actions" />
          <SkillCard Icon={SiJest} label="Jest" />
          <SkillCard Icon={SiMui} label="MUI" />
          <SkillCard Icon={SiNpm} label="npm" />
          <SkillCard Icon={SiNodedotjs} label="Node" />
          <SkillCard Icon={SiNodemon} label="Nodemon" />
          <SkillCard Icon={SiReact} label="React" />
          <SkillCard Icon={SiReact} label="React Native" />
          <SkillCard Icon={SiReactrouter} label="React Router" />
          <SkillCard Icon={SiRedux} label="Redux" />
        </Box>
      </Box>

      <Box sx={{ flex: 1, pt: 0, px: 0, bgcolor: "" }}>
        <Typography variant="h5" sx={styles.subtitle}>
          Databases & Cloud Hosting
        </Typography>
        <Box sx={styles.skillCards}>
          <SkillCard Icon={SiGithubpages} label="GitHub Pages" />
          <SkillCard Icon={SiMongodb} label="MongoDB" />
          <SkillCard Icon={SiSequelize} label="Sequelize" />
          <SkillCard Icon={SiSqlite} label="SQLite" />
          <SkillCard Icon={SiPostgresql} label="PostgreSQL" />
          <SkillCard Icon={SiVercel} label="Vercel" />
        </Box>
      </Box>

      <Box sx={{ flex: 1, pt: 0, px: 0, bgcolor: "" }}>
        <Typography variant="h5" sx={styles.subtitle}>
          Software & Tools
        </Typography>

        <Box sx={styles.skillCards}>
          <SkillCard Icon={SiCanva} label="Canva" />
          <SkillCard Icon={SiDocker} label="Docker" />
          <SkillCard Icon={SiEclipseide} label="Eclipse" />
          <SkillCard Icon={SiEslint} label="ESLint" />
          <SkillCard Icon={SiGit} label="Git" />
          <SkillCard Icon={SiGithub} label="GitHub" />
          <SkillCard Icon={SiGitlab} label="GitLab" />
          <SkillCard Icon={SiGooglesheets} label="Google Sheets" />
          <SkillCard Icon={SiIntellijidea} label="IntelliJ IDEA" />
          <SkillCard Icon={SiMicrosoftoffice} label="Microsoft Office" />
          <SkillCard Icon={SiNginx} label="NGINX" />
          <SkillCard Icon={SiPostman} label="Postman" />
          <SkillCard Icon={SiVisualstudiocode} label="VS Code" />
          <SkillCard Icon={SiVite} label="Vite" />
        </Box>
      </Box>
    </Box>
  )
}

export default Skills
