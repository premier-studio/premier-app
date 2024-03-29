import { styled } from "@mui/material/styles";

import { AppBar, Toolbar, Typography, Button, Grid, SwipeableDrawer } from "@mui/material";

import { Link } from "react-router-dom";

const appbarHeight = "75px";
const announcementHeight = "30px";
export const height = `calc(${appbarHeight} + ${announcementHeight})`;

const style = {
  Root: styled("div")(({ theme }) => ({})),

  Annoucement: styled("div")(({ theme }) => ({
    height: announcementHeight,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    background: "linear-gradient(270deg, #c9e8c2, #f5ebf9)",
    backgroundSize: "400% 400%",
    "-webkit-animation": "AnimationName 53s ease infinite",
    "-moz-animation": "AnimationName 53s ease infinite",
    animation: "AnimationName 53s ease infinite",
  })),

  AppBar: styled(AppBar)(({ theme }) => ({
    ...theme.myBreakpoints.app,
    backgroundColor: theme.colors.secondary,
    boxShadow: "none",
    height: appbarHeight,
    display: "flex",
    justifyContent: "center",
  })),
  Link: styled(Link)(({ theme }) => ({
    ...theme.titles.primary,
  })),
  PointOpenWallet: styled("div")(({ theme }) => ({
    // ...theme.myBreakpoints.level3,
    position: "absolute",
    right: 0,
    top: height,
    backgroundColor: "red",
    width: "-2.5px",
    height: "-2.5px",
  })),
  ExtraMenuButton: styled("div")(({ theme }) => ({
    padding: "7px 20px 7px 20px",
    fontFamily: theme.fontFamily.primary,
    fontWeight: 600,
    fontSize: "0.9em",
  })),
  HeaderFirstLeftSideTitle: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "1.25em",
    fontWeight: 500,
    marginTop: "25px",
    marginBottom: "25px",
  })),
  Wallet: styled(Grid)(({ theme }) => ({
    backgroundColor: theme.colors.primary,
    paddingLeft: "7.5px",
    paddingRight: "30px",
    borderRadius: "25px",
    paddingTop: "5px",
    paddingBottom: "5px",
  })),
  GoToAppButton: styled("div")(({ theme }) => ({
    ...theme.button.normal,
    color: "white",
    backgroundColor: theme.colors.black,
    fontWeight: 700,
    fontSize: "0.8em",
  })),
  WalletENS: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    color: theme.colors.black,
    fontWeight: 700,
    fontSize: "0.85em",
    marginBottom: "3.5px",
    marginTop: "1.5px",
  })),
  WalletAddy: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 600,
    color: "grey",
    fontSize: "0.65em",
  })),
  WalletView: styled("div")(({ theme }) => ({
    padding: "15px",
    width: "325px",
    boxSizing: "border-box",
    maxHeight: "calc(70vh)",
  })),
  //
  WalletTypo1: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 500,
    color: "grey",
    fontSize: "0.8em",
  })),
  WalletTypoCollection: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 600,
    letterSpacing: "0.25px",
    fontSize: "0.65em",
    padding: "5px",
    paddingLeft: "10px",
    paddingRight: "10px",
    color: "grey",
    backgroundColor: theme.colors.secondary,
    borderRadius: "5px",
  })),
  WalletTypoCollectionDrop: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 900,
    letterSpacing: "-0.5px",
    fontSize: "0.75em",
  })),
  WalletTypoDripNft: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 800,
    fontSize: "0.65em",
    marginRight: "5px",
    paddingTop: "5px",
    paddingBottom: "5px",
  })),
  WalletTypoDripId2: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    letterSpacing: "0.5px",
    fontSize: "0.65em",
    padding: "2.5px",
    fontWeight: 600,
    borderRadius: "5px",
    backgroundColor: theme.colors.secondary,
    width: "25px",
    textAlign: "center",
    //
  })),
  WalletTypoDripId: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 600,
    letterSpacing: "0.5px",
    fontSize: "0.65em",
    padding: "2.5px",
    paddingLeft: "10px",
    paddingRight: "10px",
    borderRadius: "5px",
    backgroundColor: theme.colors.secondary,
  })),
  WalletTypoDripAction: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 600,
    fontSize: "0.65em",
    color: "#3366BB",
    borderRadius: "5px",
  })),
  Title: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 800,
    fontSize: "0.7em",
    color: "white",
    backgroundColor: "red",
    paddingLeft: "5px",
    paddingRight: "5px",
  })),
  Title2: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 800,
    fontSize: "0.7em",
  })),
  Title3: styled(Typography)(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontWeight: 400,
    fontSize: "0.7em",
  })),
  LinkNavbar: styled(Grid)(({ theme }) => ({
    marginRight: "5px",
    paddingTop: "5px",
    paddingBottom: "5px",
  })),
  LinkBarText: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.tertiary,
    fontSize: "0.9em",
    fontWeight: 700,
    // padding: "2.5px",
    // paddingTop: "2.5px",
    paddingLeft: "5px",
    paddingRight: "5px",
    // backgroundColor: theme.colors.black,
    borderRadius: "1px",
    ":hover": {
      backgroundColor: "red",
      color: "white",
    },
  })),
  NetworkSupported: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "0.8em",
    letterSpacing: "-0.25px",
    // fontWeight: 700,
  })),
};

export default style;
