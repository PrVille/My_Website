const lightPalette = {
  primary: {
    main: "#ffffff",
  },
  divider: "#fde68a",
  background: {
    default: "#ffffff",
    secondary: "#f9f9fb",
    paper: "#ffffff",
    header: "#ffffff",
  },
  text: {
    primary: "#000",
    secondary: "#4e4e4e",
  },
  shadows: {
    sm: "0px 0px 1px black",
    lg: "0px 0px 10px black",
  },
}

const darkPalette = {
  primary: {
    main: "#fff",
  },
  divider: "#004282",
  background: {
    default: "#000",
    secondary: "#1f1f1f",
    paper: "#000",
    header: "#000",
  },
  text: {
    primary: "#fff",
    secondary: "#cdcdcd",
  },
  shadows: {
    sm: "0px 0px 1px white",
    lg: "0px 0px 10px white",
  },
}

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light" ? lightPalette : darkPalette),
  },
})
