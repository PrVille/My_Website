const lightPalette = {
  primary: {
    main: "#ffffff",
    secondary: "#f9f9fb"
  },
  divider: "#fde68a",
  background: {
    default: "#ffffff",
    secondary: "#f9f9f9",
    paper: "#ffffff",
    header: "#ffffff",
  },
  text: {
    primary: "#000",
    secondary: "#4e4e4e",
  },
  shadows: {
    sm: "0px 0px 0px black",
    md: "0px 0px 3px black",
    lg: "0px 0px 6px black",
  },
}

const darkPalette = {
  primary: {
    main: "#fff",
    secondary: "#1f1f1f"
  },
  divider: "#fff",
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
    sm: "0px 0px 0px white",
    md: "0px 0px 3px white",
    lg: "0px 0px 6px white",
  },
}

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light" ? lightPalette : darkPalette),
  },
})
