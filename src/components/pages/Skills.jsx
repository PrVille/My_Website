import { Divider } from "@mui/material"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import EaseIn from "../EaseIn"

const SkillItem = ({ iconName, iconHeight = 50, label }) => {
  return (
    <Box
      sx={{
        p: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        height={iconHeight}
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconName}.svg`}
      />
      <Divider />
      <Typography
        variant="body1"
        sx={{
          fontFamily: "monospace",
          letterSpacing: ".0rem",
          fontWeight: 700,
        }}
      >
        {label}
      </Typography>
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
          <EaseIn randomDirection>
            <img src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" />
          </EaseIn>
          <EaseIn randomDirection>
            <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
          </EaseIn>
          <EaseIn randomDirection>
            <img src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white" />
          </EaseIn>
          <EaseIn randomDirection>
            <img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
          </EaseIn>
          <EaseIn randomDirection>
            <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
          </EaseIn>
          <EaseIn randomDirection>
            <img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white" />
          </EaseIn>
          <EaseIn randomDirection>
            <img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" />
          </EaseIn>
          <EaseIn randomDirection>
            <img src="https://img.shields.io/badge/Scala-DC322F?style=for-the-badge&logo=scala&logoColor=white" />
          </EaseIn>
          <EaseIn randomDirection>
            <img src="https://custom-icon-badges.demolab.com/badge/SQL-025E8C.svg?style=for-the-badge&logo=database&logoColor=white" />
          </EaseIn>
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
            <EaseIn randomDirection>
              <img src="https://img.shields.io/badge/Apollo%20GraphQL-311C87?&style=for-the-badge&logo=Apollo%20GraphQL&logoColor=white" />
            </EaseIn>
            <EaseIn randomDirection>
              <img src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white" />
            </EaseIn>
            <EaseIn randomDirection>
              <img src="https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e" />
            </EaseIn>
            <EaseIn randomDirection>
              <img src="https://img.shields.io/badge/deno%20js-000000?style=for-the-badge&logo=deno&logoColor=white" />
            </EaseIn>
            <EaseIn randomDirection>
              <img src="https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37" />
            </EaseIn>
            <EaseIn randomDirection>
              <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
            </EaseIn>
            <EaseIn randomDirection>
              <img src="https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white" />
            </EaseIn>
            <EaseIn randomDirection>
              <img src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white" />
            </EaseIn>
            <EaseIn randomDirection>
              <img src="https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white" />
            </EaseIn>
            <EaseIn randomDirection>
              <img src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" />
            </EaseIn>
            <EaseIn randomDirection>
              <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
            </EaseIn>
            <EaseIn randomDirection>
              <img src="https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD" />
            </EaseIn>
            <EaseIn randomDirection>
              <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
            </EaseIn>
            <EaseIn randomDirection>
              <img src="https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
            </EaseIn>
            <EaseIn randomDirection>
              <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
            </EaseIn>
            <EaseIn randomDirection>
              <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" />
            </EaseIn>
            <EaseIn randomDirection>
              <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />
            </EaseIn>
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
            <img src="https://img.shields.io/badge/github_pages-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />
            <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
            <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" />
            <img src="https://img.shields.io/badge/SQLite-07405e.svg?style=for-the-badge&logo=sqlite&logoColor=white" />
            <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" />
            <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" />
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
            <img src="https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white" />
            <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" />
            <img src="https://img.shields.io/badge/Eclipse-FE7A16.svg?style=for-the-badge&logo=Eclipse&logoColor=white" />
            <img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" />
            <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" />
            <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />
            <img src="https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white" />
            <img src="https://img.shields.io/badge/Google%20Sheets-34A853?style=for-the-badge&logo=google-sheets&logoColor=white" />
            <img src="https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white" />
            <img src="https://img.shields.io/badge/Microsoft_Office-D83B01?style=for-the-badge&logo=microsoft-office&logoColor=white" />
            <img src="https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white" />
            <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" />
            <img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Skills
