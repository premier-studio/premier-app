import { createTheme, Theme } from "@mui/material";
import { createBreakpoints, useTheme as useThemeMUI } from "@mui/system";

declare module "@mui/material/styles" {
  interface Theme extends MyTheme {}
  // allow configuration using `createTheme`
  interface ThemeOptions extends MyTheme {}
}

const breakpoints = createBreakpoints({});

type MyTheme = typeof themeOpts;

export const useTheme = () => useThemeMUI() as Theme;

const themeBasics = {
  colors: {
    primary: "#f9f9fb",
    secondary: "#f1f1f5",
    tertiary: "#cbcbdc",
    black: "#09090c",
  },

  fontFamily: {
    primary: "montserrat",
    secondary: "Source Code Pro",
    tertiary: "futura",
    wide: "wide",
  },
};

const themeOpts = {
  ...themeBasics,

  header: {
    height: "60px",
  },

  components: {
    MuiGrid: {
      styleOverrides: {
        container: {},
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontFamily: "futura",
          fontSize: "11.5px",
          letterSpacing: "0.15px",
          lineHeight: "14.5px",
          fontWeight: 400,
        },
      },
    },
  },

  cards: {
    primary: {
      boxShadow: "5px 5px 5px #bebebe, -1px -1px 1px #fff",
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "25px",
    },
    secondary: {
      boxShadow: "5px 5px 5px #bebebe, -1px -1px 1px #fff",
      padding: "20px",
      backgroundColor: "#f9f9fb",
      borderRadius: "25px",
    },
  },

  myTypography: {
    huge: {
      fontFamily: themeBasics.fontFamily.primary,
      fontColor: themeBasics.colors.black,
      fontWeight: 800,
      fontSize: "7em",
      [breakpoints.down("md")]: {
        fontSize: "5em",
      },
      [breakpoints.only("xs")]: {
        fontSize: "2.5em",
      },
    },
    big: {
      fontFamily: themeBasics.fontFamily.primary,
      fontColor: themeBasics.colors.black,
      fontWeight: 600,
      fontSize: "4.5em",
      letterSpacing: "-0.04em",
      [breakpoints.down("lg")]: {
        fontSize: "3em",
      },
      [breakpoints.only("xs")]: {
        fontSize: "2.25em",
      },
    },
    normalBig: {
      fontFamily: themeBasics.fontFamily.primary,
      fontColor: themeBasics.colors.black,
      fontWeight: 600,
      fontSize: "2.35em",
      [breakpoints.down("md")]: {
        fontSize: "2em",
      },
      [breakpoints.only("xs")]: {
        fontSize: "1.5em",
      },
    },
    normalBold: {
      fontFamily: themeBasics.fontFamily.primary,
      fontColor: themeBasics.colors.black,
      fontWeight: 800,
      fontSize: "1.1em",
    },
    normalTitle: {
      fontFamily: themeBasics.fontFamily.primary,
      fontColor: themeBasics.colors.black,
      fontWeight: 500,
      fontSize: "0.9em",
      [breakpoints.up("xl")]: {},
      [breakpoints.only("xs")]: {},
    },
    normal: {
      fontFamily: themeBasics.fontFamily.primary,
      fontColor: themeBasics.colors.black,
      fontWeight: 500,
      fontSize: "1em",
      lineHeight: "1.1em",
      [breakpoints.up("xl")]: {
        fontSize: "1.1em",
      },
      [breakpoints.only("xs")]: {},
    },
  },

  button: {
    normal: {
      fontFamily: themeBasics.fontFamily.primary,
      backgroundColor: themeBasics.colors.black,
      color: themeBasics.colors.primary,
      fontWeight: 600,
      fontSize: "0.9em",
      height: "35px",
      minWidth: "150px",
      borderRadius: "50px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "1px 1px 5px #bebebe, -1px -1px 1px #fff",
    },
  },

  titles: {
    primary: {
      fontFamily: themeBasics.fontFamily.secondary,
      fontSize: "17.5px",
      fontWeight: 700,
      letterSpacing: "-1.15px",
    },
    secondary: {
      fontFamily: themeBasics.fontFamily.secondary,
      fontSize: "12.5px",
      letterSpacing: "-0.5px",
      fontWeight: 600,
    },
  },

  myBreakpoints: {
    static: {
      [breakpoints.up("lg")]: {
        paddingLeft: "10vw",
        paddingRight: "10vw",
      },
      [breakpoints.down("lg")]: {
        paddingLeft: "7vw",
        paddingRight: "7vw",
      },
      [breakpoints.down("md")]: {
        paddingLeft: "5vw",
        paddingRight: "5vw",
      },
      [breakpoints.down("sm")]: {
        paddingLeft: "2vw",
        paddingRight: "2vw",
      },
      [breakpoints.down("sm")]: {
        paddingLeft: "20px",
        paddingRight: "20px",
      },
    },
    antiStatic: {
      [breakpoints.up("lg")]: {
        marginLeft: "-10vw",
        marginRight: "-10vw",
      },
      [breakpoints.down("lg")]: {
        marginLeft: "-7vw",
        marginRight: "-7vw",
      },
      [breakpoints.down("md")]: {
        marginLeft: "-5vw",
        marginRight: "-5vw",
      },
      [breakpoints.down("sm")]: {
        marginLeft: "-2vw",
        marginRight: "-2vw",
      },
      [breakpoints.down("sm")]: {
        marginLeft: "-20px",
        marginRight: "-20px",
      },
    },
    app: {
      paddingLeft: "25px",
      paddingRight: "25px",
    },
  },
};

export const theme = createTheme(themeOpts);
