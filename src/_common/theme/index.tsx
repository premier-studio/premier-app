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
    wide: "phonk",
  },
};

const themeOpts = {
  ...themeBasics,

  header: {
    height: "80px",
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
      fontWeight: 600,
      fontSize: "3.5em",
      letterSpacing: "-0.04em",
      [breakpoints.down("lg")]: {
        fontSize: "3em",
      },
      [breakpoints.only("xs")]: {
        fontSize: "2em",
      },
    },
    big: {
      fontFamily: themeBasics.fontFamily.primary,
      fontColor: themeBasics.colors.black,
      fontWeight: 600,
      fontSize: "2.75em",
      letterSpacing: "-0.04em",
      [breakpoints.down("lg")]: {
        fontSize: "2.25em",
      },
      [breakpoints.only("xs")]: {
        fontSize: "1.9em",
      },
    },
    normalBig: {
      fontFamily: themeBasics.fontFamily.primary,
      fontColor: themeBasics.colors.black,
      fontWeight: 600,
      fontSize: "1.5em",
      lineHeight: "1.2em",
      letterSpacing: "-0.5px",
      [breakpoints.down("md")]: {
        fontSize: "1.25em",
      },
      [breakpoints.only("xs")]: {
        fontSize: "1.1em",
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
      fontWeight: 900,
      fontSize: "1.1em",
      lineHeight: "1.1em",
      [breakpoints.up("xl")]: {
        fontSize: "1.25em",
      },
      [breakpoints.only("xs")]: {},
    },
    normal: {
      fontFamily: themeBasics.fontFamily.primary,
      fontColor: themeBasics.colors.black,
      fontWeight: 500,
      fontSize: "1em",
      lineHeight: "1.1em",
      [breakpoints.up("xl")]: {},
      [breakpoints.only("xs")]: {},
    },
    navbarLink: {
      fontFamily: themeBasics.fontFamily.primary,
      border: `1px solid ${themeBasics.colors.tertiary}`,
      color: themeBasics.colors.black,
      fontWeight: 600,
      fontSize: "0.9em",
      borderRadius: "10px",
      height: "35px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      paddingLeft: "10px",
      paddingRight: "10px",
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
        paddingLeft: "15vw",
        paddingRight: "15vw",
      },
      [breakpoints.down("lg")]: {
        paddingLeft: "8vw",
        paddingRight: "8vw",
      },
      [breakpoints.down("md")]: {
        paddingLeft: "6vw",
        paddingRight: "6vw",
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
        marginLeft: "-15vw",
        marginRight: "-15vw",
      },
      [breakpoints.down("lg")]: {
        marginLeft: "-8vw",
        marginRight: "-8vw",
      },
      [breakpoints.down("md")]: {
        marginLeft: "-6vw",
        marginRight: "-6vw",
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
