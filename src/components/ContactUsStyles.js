import TextField from "@material-ui/core/TextField";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export const useStyles = makeStyles((theme) => ({
  heroContent: {
    margin: "auto",
    marginTop: 50,
    maxWidth: 1440,
    backgroundColor: "black",
    color: "white",
  },
  heroTxt: {
    padding: "0 70px",
    "@media(max-width: 600px)": {
      padding: 0,
      textAlign: "center",
     
    },
  },
  heroImg: {
    width: "100%",
    cursor: "pointer",
    "&:hover": {
      opacity: 0.7,
    },
  },
  imgContainer: {
    width: "100%",
    padding: theme.spacing(1),
    margin: "auto",
    maxWidth: 425,
    "@media(max-width: 600px)": {
      maxWidth: "100%",
    },
  },
  heroImgTex: {
    padding: 10,
    fontSize: 14,
    position: "absolute",
  },
  container: {
    margin: "auto",
    marginTop: 50,
    maxWidth: 1440,
    backgroundColor: "white",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& > *": {
      margin: 30,
      padding: 25,
      width: 360,
      height: "100%",
      
    },
  },
  cardHeaderTxt: {
    color: "white",
    fontSize: 25,
    fontWeight: 800,
  },
  cardBodyTxt: {
    color: "white",
    fontSize: 17,
    fontWeight: 800,
  },
  cardBodyTxtContainer: {
    height: "230px",
    padding: "50px 0 50px 0",
    // backgroundColor: "black",
  },
  cardLeft: {
    padding: 40,
    borderTop: "13px #F974FF solid",
    height: 446,
    borderRadius: 15,
    backgroundColor: "black",

  },
  cardRight: {
    borderTop: "13px #F6AA39 solid",
    padding: 40,
    height: 446,
    borderRadius: 15,
    backgroundColor: "black",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",

    
  },
  formContainer: {
    maxWidth: 850,
    margin: "50px auto",
  },
  smlInput: {
    width: "50%",
  
  },
  emailAndUsernameContainer: {
    "& > *": {
      padding: "0 3px",
    },
  },
  txtArea: {
    margin: "10px 0",
    width: "100%",
  },
  uploadTitle: {
    color: "#0CAD9E",
    fontSize: 14,
    fontWeight: "600",
  },
  uploadIcon: {
    width: 20,
    height: 20,
    color: "#0CAD9E",
    marginLeft: 5,
  },
  uploadText: {
    textAlign: "left",
    color: "#6d6d6d",
    fontSize: 12,
    fontWeight: "400",
  },
  input: {
    display: "none",
  },
  uploadSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "@media(max-width: 600px)": {
      marginTop: "20px",
      flexDirection: "row",
    },
  },
  bottomSection: {
    "& > *": {
      margin: "10px",
    },
    marginTop: 30,
    justifyContent: "center",
  },
  requestText: {
    fontSize: 12,
    textAlign: "left",
    color: "black",
    fontWeight: "600",
  },
  mailText: {
    fontSize: 12,
    textAlign: "left",
    color: "#E3F986",
    fontWeight: "600",
    textDecoration: "none",
  },
  uploadButtonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    "@media(max-width: 600px)": {
      width: "50%",
    },
  },
  center: {
    display: "flex",
    justifyContent: "center",
  },
  smText: {
    fontSize: 10,
    textAlign: "left",
    color: "#E3F986",
    fontWeight: "600",
    textDecoration: "none",
  },
  emailSection: {
    borderWidth: 0,
    borderLeftWidth: "0.5px",
    borderColor: "#c0c0c0",
    borderStyle: "solid",
    "@media(max-width: 600px)": {
      borderLeftWidth: "0px",
    },
  },
  bottomImg: { width: "80%", height: "80%", maxWidth: 67 },
}));

export const ColorButton = withStyles(() => ({
  root: {
    margin: "auto",
    width: "250px",
    border: "1px #0cad9e solid",
    color: "#0cad9e",
    borderRadius: "40px",
    boxShadow: "none",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "transparent",
      borderColor: "#0cad9e",
      opacity: 0.7,
    },
  },
}))(Button);

export const SubmitButton = withStyles(() => ({
  root: {
    margin: "20px auto 0 auto",
    width: "150px",
    color: "#0cad9e",
    fontSize: 12,
    fontWeight: "800",
  },
}))(Button);

export const FileSubmitButton = withStyles(() => ({
  root: {
    width: 110,
    borderRadius: 20,
    margin: "10px auto 0 auto",
    backgroundColor: "#0cad9e",
    color: "#fff",
    fontSize: 14,
    fontWeight: "800",
    "&:hover": {
      backgroundColor: "#0cad9e",
      opacity: 0.9,
    },
  },
}))(Button);

export const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#0cad9e",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#0cad9e",
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#0cad9e",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#0cad9e",
      },
    },
  },
})(TextField);
