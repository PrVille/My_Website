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

const SkillCard = ({ Icon, label, size = 60 }) => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        transition: "all .2s ease-in-out",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <EaseIn randomDirection>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: "background.secondary",
            p: 1,
            m: 0.75,
            boxShadow: theme.palette.shadows.md,
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
      <Typography
        variant="h3"
        sx={{
          fontFamily: "monospace",
          letterSpacing: ".1rem",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        TECHNOLOGIES & TOOLS
      </Typography>

      <Box sx={{ flex: 1, pt: 5, px: 0, bgcolor: "" }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "monospace",
            letterSpacing: ".5rem",
            fontWeight: 700,
          }}
        >
          Languages
        </Typography>
        <Box
          sx={{
            bgcolor: "",
            display: "flex",
            py: 3,
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
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
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "monospace",
              letterSpacing: ".5rem",
              fontWeight: 700,
            }}
          >
            Frameworks & Libraries
          </Typography>
          <Box
            sx={{
              bgcolor: "",
              display: "flex",
              py: 3,
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
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
      </Box>

      <Box sx={{ flex: 1, pt: 0, px: 0, bgcolor: "" }}>
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "monospace",
              letterSpacing: ".5rem",
              fontWeight: 700,
            }}
          >
            Databases & Cloud Hosting
          </Typography>
          <Box
            sx={{
              bgcolor: "",
              display: "flex",
              py: 3,
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <SkillCard Icon={SiGithubpages} label="GitHub Pages" />
            <SkillCard Icon={SiMongodb} label="MongoDB" />
            <SkillCard Icon={SiSequelize} label="Sequelize" />
            <SkillCard Icon={SiSqlite} label="SQLite" />
            <SkillCard Icon={SiPostgresql} label="PostgreSQL" />
            <SkillCard Icon={SiVercel} label="Vercel" />
          </Box>
        </Box>
      </Box>

      <Box sx={{ flex: 1, pt: 0, px: 0, bgcolor: "" }}>
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "monospace",
              letterSpacing: ".5rem",
              fontWeight: 700,
            }}
          >
            Software & Tools
          </Typography>

          <Box
            sx={{
              bgcolor: "",
              display: "flex",
              py: 3,
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
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
    </Box>
  )
}

export default Skills
