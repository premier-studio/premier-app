import { styled } from "@mui/material/styles";

const style = {
  Root: styled("div")(({ theme }) => ({})),
  ModelBox: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    backgroundColor: theme.colors.primary,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    outline: 0,
    padding: "35px",
    borderRadius: "1px ",
    width: "35vw",
    minWidth: "300px",
  })),
  ModalTitle: styled("div")(({ theme }) => ({
    color: theme.colors.black,
    fontFamily: theme.fontFamily.wide,
    fontSize: "2em",
    fontWeight: 900,
    marginBottom: "25px",
    paddingBottom: "10px",
    borderBottom: `1.5px solid ${theme.colors.secondary}`,
  })),
  TitleStepModal: styled("div")(({ theme }) => ({
    fontSize: "0.85em",
    fontWeight: 900,
    display: "inline-block",
  })),
  Step: styled("div")(({ theme }) => ({
    padding: "12.5px",
    borderRadius: "1px",
    lineHeight: "20px",
    backgroundColor: theme.colors.secondary,
  })),
  MintPriceTitle: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "0.75em",
    fontWeight: 600,
    opacity: 0.3,
  })),
  MintPrice: styled("div")(({ theme }) => ({
    fontFamily: theme.fontFamily.primary,
    fontSize: "1.5em",
    fontWeight: 600,
    letterSpacing: "0px",
  })),
  FinalStep: styled("div")(({ theme }) => ({
    fontSize: "0.85em",
    fontFamily: theme.fontFamily.primary,
    padding: "10px",
    fontWeight: 500,
    borderRadius: "15px",
    textAlign: "center",
    backgroundColor: theme.colors.secondary,
    letterSpacing: "-0.25px",
  })),
  MintButton: styled("div")(({ theme }) => ({
    backgroundColor: theme.colors.black,
    fontFamily: theme.fontFamily.primary,
    textAlign: "center",
    fontWeight: 500,
    fontSize: "0.9em",
    color: "white",
    borderRadius: "0.5px",
    padding: "12.5px",
  })),
  FinalStep2: styled("div")<{ $display: boolean }>(({ theme, $display }) => ({
    visibility: $display ? "visible" : "hidden",
    transition: "all 0.5s",
    backgroundColor: theme.colors.black,
    color: "white",
    fontFamily: theme.fontFamily.primary,
    padding: "7.5px",
    paddingLeft: "25px",
    paddingRight: "25px",
    fontSize: "0.7em",
    fontWeight: 700,
    borderRadius: "15px",
    // letterSpacing: "0.5px",
  })),
};

export default style;