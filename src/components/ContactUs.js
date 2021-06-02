import React, { Fragment, useLayoutEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import PublishIcon from "@material-ui/icons/Publish";
import Button from "@material-ui/core/Button";
import Logo_app from "../images/logo1_1.png";
import collaborate_icon from "../images/SVG/collaborate icon.svg";
import email_icon from "../images/SVG/email icon.svg";

import {
  useStyles,
  ColorButton,
  SubmitButton,
  FileSubmitButton,
  CssTextField,
} from "./ContactUsStyles";

export default function ContactUs() {
  const classes = useStyles();
  const [direction, setDirection] = React.useState("row");

  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth < 600) setDirection("column-reverse");
      else setDirection("row");
    }
    window.addEventListener("resize", updateSize);
  }, []);

  return (
    <Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="lg">
            <Grid
              container
              spacing={2}
              justify="space-between"
              alignItems="center"
              direction={direction}
            >
              <Grid item xs={12} sm={6}>
                <div className={classes.heroTxt}>
                  {direction !== "column-reverse" && (
                    <Typography gutterBottom variant="h2" component="h3">
                      Contact us
                    </Typography>
                  )}
                  <Typography gutterBottom variant="h4" component="h5">
                    Really need keep in touch? We'd love to hear you. You can
                    easily reach us...
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.imgContainer} elevation={3}>
                  {direction === "column-reverse" && (
                    <div>
                      <Typography
                        gutterBottom
                        variant="h2"
                        component="h3"
                        className={classes.heroImgTex}
                      >
                        Contact us
                      </Typography>
                    </div>
                  )}
                  <img className={classes.heroImg} src={Logo_app} alt="" />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </div>
        <div className={classes.container}>
          <Container maxWidth="lg">
            <div className={classes.cardContainer}>
              <Paper elevation={3} className={classes.cardLeft}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Typography className={classes.cardHeaderTxt}>
                    {`Help & Support`}
                  </Typography>
                  <div className={classes.cardBodyTxtContainer}>
                    <Typography className={classes.cardBodyTxt}>
                      {`Our support team is`}
                    </Typography>
                    <Typography className={classes.cardBodyTxt}>
                      {`ready to help 365/7/24\n`}
                    </Typography>
                    <Typography className={classes.cardBodyTxt}>
                      {`to address issues fast.\n`}
                    </Typography>
                  </div>
                  <ColorButton variant="contained" color="primary">
                    {`Visit Support Page`}
                  </ColorButton>
                </div>
              </Paper>
              <Paper elevation={3} className={classes.cardRight}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Typography className={classes.cardHeaderTxt}>
                    {`eVote NEWS`}
                  </Typography>
                  <div className={classes.cardBodyTxtContainer}>
                    <Typography className={classes.cardBodyTxt}>
                      {`Are you interested in our`}
                    </Typography>
                    <Typography className={classes.cardBodyTxt}>
                      {`latest news or working on`}
                    </Typography>
                    <Typography className={classes.cardBodyTxt}>
                      {`eVote SriLanka web app`}
                    </Typography>
                    <Typography className={classes.cardBodyTxt}>
                      {`and need to get in touch?`}
                    </Typography>
                  </div>
                  <ColorButton variant="contained" color="primary">
                    {`Visit Support Page`}
                  </ColorButton>
                </div>
              </Paper>
            </div>
          </Container>
        </div>
        <div className={classes.formContainer}>
          <Container maxWidth="lg">
            <Grid item xs={12} sm container>
              <Grid item xs={12} sm={8} container direction="column">
                <Grid item xs>
                  <Typography gutterBottom className={classes.cardBodyTxt}>
                    Any help is needed? Send us a message
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs
                  container
                  direction="row"
                  className={classes.emailAndUsernameContainer}
                >
                  <CssTextField
                    className={classes.smlInput}
                    label="Name"
                    variant="outlined"
                    id="custom-css-outlined-input"
                  />
                  <CssTextField
                    className={classes.smlInput}
                    label="Email"
                    variant="outlined"
                    id="custom-css-outlined-input"
                  />
                </Grid>
                <Grid
                  item
                  xs
                  container
                  direction="row"
                  className={classes.emailAndUsernameContainer}
                >
                  <CssTextField
                    className={classes.txtArea}
                    label="Tell us more"
                    variant="outlined"
                    id="custom-css-outlined-input"
                    multiline
                    rows={4}
                  />
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                className={classes.uploadSection}
                direction={direction === "row" ? "column" : "row"}
              >
                <div className={classes.uploadButtonContainer}>
                  <input
                    accept="*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <label htmlFor="contained-button-file">
                    <Button
                      component="span"
                      style={{
                        padding: 15,
                        maxWidth: 190,
                        width: "100%",
                        backgroundColor: "#eaf5f4",
                        border: "1px dotted #0cad9e",
                      }}
                    >
                      <Grid item container direction="column">
                        <Grid
                          item
                          container
                          direction="row"
                          alignItems="center"
                        >
                          <Typography className={classes.uploadTitle}>
                            {`Upload files`}
                          </Typography>
                          <PublishIcon className={classes.uploadIcon} />
                        </Grid>
                        <Typography className={classes.uploadText}>
                          {`Add images/videos to help us understand.`}
                        </Typography>
                        <Typography className={classes.uploadText}>
                          {`[Maximum size: 10 MB]`}
                        </Typography>
                      </Grid>
                    </Button>
                  </label>
                </div>
                <FileSubmitButton>{`Submit`}</FileSubmitButton>
              </Grid>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs={12} sm={8} container direction="row">
                <Grid
                  item
                  xs
                  container
                  direction="row"
                  className={classes.bottomSection}
                >
                  <Grid item xs={12} sm={5} container direction={"row"}>
                    <Grid item xs={4} className={classes.center}>
                      <img src={collaborate_icon } className={classes.bottomImg} alt="" />
                    </Grid>
                    <Grid
                      item
                      xs={8}
                      container
                      direction={"column"}
                      justify="center"
                    >
                      <Typography className={classes.requestText}>
                        {`Collaborations:`}
                      </Typography>
                      <Typography>
                        <a
                          className={classes.mailText}
                          href="mailto:evotesl@gmail.com"
                        >{`evotesl@gmail.com`}</a>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={5}
                    container
                    className={classes.emailSection}
                    direction={"row"}
                  >
                    <Grid
                      item
                      xs={4}
                      justify="center"
                      alignItems="center"
                      className={classes.center}
                    >
                      <img src={email_icon } className={classes.bottomImg} alt="" />
                    </Grid>
                    <Grid
                      item
                      xs={8}
                      container
                      direction={"column"}
                      justify="center"
                    >
                      <Typography className={classes.requestText}>
                        {`Email Address:`}
                      </Typography>
                      <Typography
                        className={classes.smText}
                      >{`eVote SriLanka`}</Typography>
                      <Typography
                        className={classes.smText}
                      >{`FACULTY OF ENGINEERING`}</Typography>
                      <Typography
                        className={classes.smText}
                      >{`UNIVERSITY OF RUHUNA`}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>
    </Fragment>
  );
}
